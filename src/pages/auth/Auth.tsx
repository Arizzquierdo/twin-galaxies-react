import { useState } from "react";
import authService from "../../services/auth.service";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    setStatus("loading");
    setMessage("");

    try {
      if (isLogin) {
        await authService.login(email, password);
        setMessage("Logged in successfully!");
      } else {
        await authService.register(email, password);
        setMessage("Account created successfully!");
      }
      setStatus("success");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setStatus("error");
      const code = err?.code || "";
      if (code === "auth/email-already-in-use") {
        setMessage("This email is already registered.");
      } else if (code === "auth/invalid-email") {
        setMessage("Invalid email address.");
      } else if (code === "auth/weak-password") {
        setMessage("Password must be at least 6 characters.");
      } else if (code === "auth/user-not-found" || code === "auth/wrong-password" || code === "auth/invalid-credential") {
        setMessage("Invalid email or password.");
      } else {
        setMessage("An error occurred. Please try again.");
      }
      console.error("Auth error:", err);
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-container">
        <h2 className="auth-title">{isLogin ? "LOG IN" : "REGISTER"}</h2>

        <div className="auth-toggle">
          <button
            className={`auth-toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => { setIsLogin(true); setMessage(""); }}
          >
            Log In
          </button>
          <button
            className={`auth-toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => { setIsLogin(false); setMessage(""); }}
          >
            Register
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="auth-input"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={status === "loading"}
            className="auth-input"
            minLength={6}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="auth-submit-btn"
          >
            {status === "loading"
              ? "Loading..."
              : isLogin
              ? "LOG IN"
              : "REGISTER"}
          </button>
        </form>

        {message && (
          <div className={`auth-message ${status}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
