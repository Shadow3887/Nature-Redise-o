import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-green-900/50 py-12 px-6 mt-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Logo y descripción */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="text-green-400" size={28} />

            <h2 className="text-xl font-bold">
              Nature <span className="text-green-400">Defender</span>
            </h2>
          </div>

          <p className="text-gray-400">
            Una aventura para proteger nuestro planeta.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="font-bold mb-4">
            Enlaces rápidos
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/" className="hover:text-green-400">
              Inicio
            </Link>

            <Link to="/characters" className="hover:text-green-400">
              Personajes
            </Link>

            <Link to="/gallery" className="hover:text-green-400">
              Galería
            </Link>

            <Link to="/download" className="hover:text-green-400">
              Descargar
            </Link>
          </div>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-bold mb-4">
            Síguenos
          </h3>

          <div className="flex gap-5 text-gray-400">

            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-green-400 hover:scale-110 transition">
              <FaGithub size={25} />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-500 hover:scale-110 transition">
              <FaYoutube size={25} />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 hover:scale-110 transition">
              <FaInstagram size={25} />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 hover:scale-110 transition">
              <FaFacebook size={25} />
            </a>

          </div>
        </div>

      </div>

      {/* Derechos de autor */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Nature Defender.
        Todos los derechos reservados.
      </div>

    </footer>
  );
}

export default Footer;