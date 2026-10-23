import { Link } from "react-router-dom";
import { Download, Play } from "lucide-react";

function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center
      justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/forest.jpg')"
      }}
    >
      <div className="absolute inset-0
        bg-gradient-to-r from-black/95
        via-black/70 to-green-950/40" />

      <div className="relative z-10 max-w-6xl
        mx-auto px-6 text-center">

        <span className="text-green-400 uppercase
          tracking-[0.3em] text-sm font-semibold">
          Protege nuestro planeta
        </span>

        <h1 className="text-5xl md:text-7xl
          font-black mt-6 mb-6">
          NATURE
          <span className="block text-green-400">
            DEFENDER
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl
          max-w-2xl mx-auto leading-relaxed">
          Explora un mundo lleno de aventuras,
          enfréntate a poderosos enemigos y
          conviértete en el héroe que salvará
          la naturaleza.
        </p>

        <div className="flex flex-wrap justify-center
          gap-5 mt-10">

          <Link
            to="/download"
            className="bg-green-500 text-black px-8
              py-4 rounded-xl font-bold flex gap-2
              items-center hover:bg-green-400
              hover:scale-105"
          >
            <Download size={20} />
            Descargar juego
          </Link>

          <Link
            to="/gallery"
            className="border border-green-400
              px-8 py-4 rounded-xl flex gap-2
              items-center hover:bg-green-500/20"
          >
            <Play size={20} />
            Ver galería
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Hero;