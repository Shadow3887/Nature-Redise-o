
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// PÁGINAS PRINCIPALES
import Home from "./view/Home";
import About from "./view/About";
import Characters from "./view/Characters";
import Gallery from "./view/Gallery";
import Download from "./view/Download";
import Contact from "./view/Contact";

// PÁGINAS DE AUTENTICACIÓN
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const location = useLocation();

  // Rutas donde no aparecerán Navbar ni Footer
  const authRoutes = ["/login", "/register"];

  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">

      {/* NAVBAR */}
      {!isAuthPage && <Navbar />}

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1">
        <Routes>
          {/* PÁGINAS PRINCIPALES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />

          {/* LOGIN Y REGISTER */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {/* FOOTER */}
      {!isAuthPage && <Footer />}

    </div>
  );
}

export default App;
