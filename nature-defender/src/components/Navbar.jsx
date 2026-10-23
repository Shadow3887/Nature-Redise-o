import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/about" },
    { name: "Personajes", path: "/characters" },
    { name: "Galería", path: "/gallery" },
    { name: "Descargar", path: "/download" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50
      bg-black/80 backdrop-blur-xl
      border-b border-green-900/40">

      <nav className="max-w-7xl mx-auto px-6
        py-4 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-2">
          <Leaf className="text-green-400" size={30} />

          <span className="text-xl font-bold">
            Nature
            <span className="text-green-400"> Defender</span>
          </span>
        </Link>

        <div className="hidden lg:flex gap-7 items-center">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 font-semibold"
                  : "text-gray-300 hover:text-green-400"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#07110c]
          border-t border-green-900 p-6
          flex flex-col gap-5">

          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="hover:text-green-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;