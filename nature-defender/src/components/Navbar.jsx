
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/about" },
    { name: "Personajes", path: "/characters" },
    { name: "Galería", path: "/gallery" },
    { name: "Descargar", path: "/download" },
    { name: "Contacto", path: "/contact" },
  ];

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Cerrar con Escape y bloquear scroll
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full
        bg-[#07110c]/95 backdrop-blur-xl
        border-b border-green-900/40 shadow-lg"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
          h-18 sm:h-20 flex items-center justify-between gap-3"
        >

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 sm:gap-3 group
            min-w-0 shrink-0"
          >
            <img
              src="/img/Nature Defender.png"
              alt="Logo de Nature Defender"
              className="w-12 h-12 sm:w-14 sm:h-14
              object-contain shrink-0
              group-hover:scale-110
              transition-transform duration-300"
            />

            <span
              className="text-base sm:text-xl lg:text-2xl
              font-extrabold tracking-tight leading-tight"
            >
              Nature
              <span className="text-green-400"> Defender</span>
            </span>
          </Link>

          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {links.filter(link => link.path !== "/download").map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative text-sm xl:text-base font-medium
                  transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-2
                  after:h-[2px] after:bg-green-400
                  after:transition-all after:duration-300
                  ${
                    isActive
                      ? "text-green-400 after:w-full"
                      : "text-gray-300 hover:text-green-400 after:w-0 hover:after:w-full"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/download"
              className="flex items-center gap-2
              bg-green-500 hover:bg-green-400
              text-black font-bold text-sm
              px-5 py-3 rounded-xl
              hover:scale-105 transition-all duration-300"
            >
              <Download size={18} />
              Descargar
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA ANIMADO */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="lg:hidden relative z-[70]
            w-11 h-11 flex flex-col
            items-center justify-center gap-[6px]
            rounded-xl bg-green-500/10
            border border-green-500/30
            hover:bg-green-500/20
            transition-colors duration-300 shrink-0"
          >
            <span
              className={`block w-6 h-[2px] bg-green-400
              rounded-full transition-all duration-300
              ${open ? "translate-y-[8px] rotate-45" : ""}`}
            />

            <span
              className={`block w-6 h-[2px] bg-green-400
              rounded-full transition-all duration-300
              ${open ? "opacity-0 scale-0" : ""}`}
            />

            <span
              className={`block w-6 h-[2px] bg-green-400
              rounded-full transition-all duration-300
              ${open ? "-translate-y-[8px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* FONDO OSCURO DEL MENÚ */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[55] lg:hidden
        bg-black/70 backdrop-blur-sm
        transition-opacity duration-300
        ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* MENÚ LATERAL MÓVIL */}
      <aside
        id="mobile-navigation"
        aria-label="Menú de navegación móvil"
        aria-hidden={!open}
        inert={!open}
        className={`fixed top-0 right-0 z-[60]
        h-dvh w-[85%] max-w-[350px]
        bg-[#0b1810]
        border-l border-green-900/50
        shadow-2xl lg:hidden
        flex flex-col
        transition-transform duration-300 ease-in-out
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* CABECERA DEL MENÚ */}
        <div
          className="flex items-center gap-3
          px-6 py-6 border-b border-green-900/40"
        >
          <img
            src="/img/Nature Defender.png"
            alt="Nature Defender"
            className="w-14 h-14 object-contain"
          />

          <div>
            <h2 className="text-lg font-bold">
              Nature
              <span className="text-green-400"> Defender</span>
            </h2>

            <p className="text-xs text-gray-400">
              Explora nuestra aventura
            </p>
          </div>
        </div>

        {/* ENLACES MÓVILES */}
        <div className="flex-1 overflow-y-auto px-5 py-8">
          <nav className="flex flex-col gap-3">
            {links.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${index * 45}ms` : "0ms"
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between
                  px-5 py-4 rounded-xl
                  font-medium text-base
                  border transition-all duration-300
                  ${
                    isActive
                      ? "bg-green-500/15 text-green-400 border-green-500/30"
                      : "text-gray-300 border-transparent hover:bg-green-500/10 hover:text-green-400"
                  }
                  ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-5 opacity-0"
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight size={18} />
              </NavLink>
            ))}
          </nav>
        </div>

        {/* PARTE INFERIOR */}
        <div className="p-6 border-t border-green-900/40">
          <Link
            to="/download"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-3
            w-full bg-green-500 hover:bg-green-400
            text-black font-bold py-4 rounded-xl
            transition-all duration-300"
          >
            <Download size={20} />
            Descargar juego
          </Link>

          <p className="text-gray-500 text-xs text-center mt-5">
            © {new Date().getFullYear()} Nature Defender
          </p>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
