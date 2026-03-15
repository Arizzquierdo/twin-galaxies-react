import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ParallaxWrapper from "./components/parallax-wrapper/ParallaxWrapper";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import HallOfFame from "./pages/hall-of-fame/HallOfFame";
import Home from "./pages/home/Home";
import PlayTetris from "./pages/play-tetris/PlayTetris";
import PlayPacman from "./pages/play-pacman/PlayPacman";
import PlayPong from "./pages/play-pong/PlayPong";
import Records from "./pages/records/Records";
import Legal from "./pages/legal/Legal";
import Forum from "./pages/forum/Forum";
import NewsArticle from "./pages/news/NewsArticle";
import Games from "./pages/games/Games";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <>
      <Header />
      <ParallaxWrapper midSpeed={0.5} frontSpeed={0.9} />

      <main className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/records" element={<Records />} />
            <Route path="/play-tetris" element={<PlayTetris />} />
            <Route path="/play-pacman" element={<PlayPacman />} />
            <Route path="/play-pong" element={<PlayPong />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/games" element={<Games />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  );
}

export default App;