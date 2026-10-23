import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import Home from "./view/Home";
import About from "./view/About";
import Characters from "./view/Characters";
import Gallery from "./view/Gallery";
import Download from "./view/Download";
import Contact from "./view/Contact";

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;