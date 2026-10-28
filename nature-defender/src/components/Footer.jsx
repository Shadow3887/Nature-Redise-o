
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com",
      color: "hover:text-green-400"
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://youtube.com",
      color: "hover:text-red-500"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
      color: "hover:text-pink-500"
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com",
      color: "hover:text-blue-500"
    }
  ];

  const footerLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/about" },
    { name: "Personajes", path: "/characters" },
    { name: "Galería", path: "/gallery" },
    { name: "Descargar", path: "/download" },
    { name: "Contacto", path: "/contact" }
  ];

  return (
    <footer className="w-full bg-black border-t border-green-900/50 mt-12 sm:mt-16">

      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12
        py-10 sm:py-14 lg:py-16"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16"
        >

          {/* LOGO Y DESCRIPCIÓN */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">

            <Link
              to="/"
              className="flex flex-col xs:flex-row sm:flex-row
              items-center gap-3 group mb-5"
            >
              <img
                src="/img/Nature Defender.png"
                alt="Logo de Nature Defender"
                className="w-20 h-20 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                object-contain flex-shrink-0
                group-hover:scale-110 transition-transform duration-300"
              />

              <h2 className="text-xl sm:text-xl lg:text-2xl font-bold leading-tight">
                Nature
                <span className="text-green-400"> Defender</span>
              </h2>
            </Link>

            <p
              className="text-gray-400 text-sm sm:text-base
              leading-relaxed max-w-sm"
            >
              Una aventura para proteger nuestro planeta.
              Explora, aprende y conviértete en un defensor
              de la naturaleza.
            </p>
          </div>

          {/* ENLACES RÁPIDOS */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">

            <h3 className="text-lg sm:text-xl font-bold text-white mb-5">
              Enlaces rápidos
            </h3>

            <nav
              aria-label="Enlaces del pie de página"
              className="grid grid-cols-2 gap-x-8 gap-y-4
              sm:flex sm:flex-col sm:gap-3"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 text-sm sm:text-base
                  hover:text-green-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* REDES SOCIALES */}
          <div
            className="flex flex-col items-center text-center
            sm:items-start sm:text-left
            sm:col-span-2 lg:col-span-1"
          >

            <h3 className="text-lg sm:text-xl font-bold text-white mb-5">
              Síguenos
            </h3>

            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-xs">
              Mantente al día con nuestras novedades,
              actualizaciones y próximos lanzamientos.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-11 h-11 sm:w-12 sm:h-12
                  flex items-center justify-center
                  rounded-full bg-gray-900
                  border border-gray-800
                  text-gray-400 text-xl sm:text-2xl
                  hover:border-green-500/50
                  hover:-translate-y-1
                  transition-all duration-300
                  ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* DERECHOS DE AUTOR */}
        <div
          className="border-t border-gray-800 mt-12 pt-6
          flex flex-col md:flex-row
          items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Nature Defender.
            Todos los derechos reservados.
          </p>

          <p className="text-green-400/80 text-xs sm:text-sm text-center md:text-right">
            Protegiendo el planeta, una aventura a la vez.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
