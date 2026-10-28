
import { Link } from "react-router-dom";
import { Download, Play } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[85svh] md:min-h-[90vh]
      flex items-center justify-center overflow-hidden
      bg-[#07110c] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/forest.jpg')"
      }}
    >
      {/* CAPA OSCURA SOBRE LA IMAGEN */}
      <div
        className="absolute inset-0
        bg-gradient-to-b
        from-black/75 via-black/65 to-[#07110c]
        md:bg-gradient-to-r
        md:from-black/90 md:via-black/65 md:to-green-950/40"
      />

      {/* EFECTOS DECORATIVOS */}
      <div
        className="absolute top-1/4 left-0
        w-40 h-40 sm:w-64 sm:h-64
        lg:w-96 lg:h-96
        bg-green-500/10 rounded-full blur-3xl
        pointer-events-none"
      />

      <div
        className="absolute bottom-0 right-0
        w-40 h-40 sm:w-64 sm:h-64
        lg:w-96 lg:h-96
        bg-emerald-400/10 rounded-full blur-3xl
        pointer-events-none"
      />

      {/* CONTENIDO PRINCIPAL */}
      <div
        className="relative z-10 w-full max-w-7xl
        mx-auto px-5 sm:px-8 lg:px-12
        py-20 sm:py-24 lg:py-32
        flex flex-col items-center text-center"
      >
        {/* ETIQUETA SUPERIOR */}
        <div
          className="inline-flex items-center justify-center
          px-4 py-2 rounded-full
          border border-green-500/30
          bg-green-500/10 backdrop-blur-md
          mb-6 sm:mb-8"
        >
          <span
            className="text-green-400 uppercase
            tracking-[0.15em] sm:tracking-[0.25em]
            text-[10px] sm:text-xs md:text-sm
            font-semibold"
          >
            Protege nuestro planeta
          </span>
        </div>

        {/* TÍTULO RESPONSIVE */}
        <h1
          className="font-black uppercase
          text-[clamp(2.5rem,10vw,7rem)]
          leading-[1.05] tracking-tight
          mb-6 sm:mb-8 drop-shadow-2xl"
        >
          <span className="block text-white">
            NATURE
          </span>

          <span
            className="block text-green-400
            drop-shadow-[0_0_25px_rgba(34,197,94,0.25)]"
          >
            DEFENDER
          </span>
        </h1>

        {/* DESCRIPCIÓN */}
        <p
          className="text-gray-200
          text-sm sm:text-base md:text-lg lg:text-xl
          leading-relaxed
          max-w-[320px] sm:max-w-xl lg:max-w-2xl
          mx-auto mb-8 sm:mb-10"
        >
          Explora un mundo lleno de aventuras,
          enfréntate a poderosos enemigos y
          conviértete en el héroe que salvará
          la naturaleza.
        </p>

        {/* BOTONES RESPONSIVE */}
        <div
          className="w-full sm:w-auto
          flex flex-col sm:flex-row
          items-stretch sm:items-center
          justify-center gap-4 sm:gap-5
          max-w-sm sm:max-w-none mx-auto"
        >
          {/* DESCARGAR */}
          <Link
            to="/download"
            className="group inline-flex items-center
            justify-center gap-3
            w-full sm:w-auto
            bg-green-500 hover:bg-green-400
            text-black font-bold
            text-sm sm:text-base
            px-7 sm:px-9 py-4
            rounded-xl
            shadow-lg shadow-green-900/30
            hover:shadow-green-500/20
            hover:-translate-y-1
            transition-all duration-300"
          >
            <Download
              size={20}
              className="group-hover:animate-bounce"
            />
            Descargar juego
          </Link>

          {/* GALERÍA */}
          <Link
            to="/gallery"
            className="group inline-flex items-center
            justify-center gap-3
            w-full sm:w-auto
            border border-green-400/70
            bg-black/20 backdrop-blur-md
            hover:bg-green-500/15
            text-white font-semibold
            text-sm sm:text-base
            px-7 sm:px-9 py-4
            rounded-xl
            hover:-translate-y-1
            transition-all duration-300"
          >
            <Play
              size={20}
              className="text-green-400
              group-hover:scale-110 transition-transform"
            />
            Ver galería
          </Link>
        </div>
      </div>

      {/* DEGRADADO INFERIOR */}
      <div
        className="absolute bottom-0 left-0
        w-full h-20 sm:h-32
        bg-gradient-to-t from-[#07110c] to-transparent
        pointer-events-none"
      />
    </section>
  );
}

export default Hero;
