import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  return signOut(auth);
};

const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export default {
  register,
  login,
  logout,
  onAuthChange
};
