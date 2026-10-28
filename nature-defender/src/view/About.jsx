
import { Earth } from "lucide-react";

function About() {
  return (
    <section
      className="w-full max-w-6xl mx-auto
      px-5 sm:px-8 lg:px-12
      py-12 sm:py-16 lg:py-20"
    >
      {/* ENCABEZADO CON LOGO */}
      <div className="text-center mb-10 sm:mb-14">

        <img
          src="/img/Nature Defender.png"
          alt="Logo de Nature Defender"
          className="w-24 h-24 sm:w-28 sm:h-28
          md:w-32 md:h-32
          object-contain mx-auto mb-5
          hover:scale-110 transition-transform duration-300"
        />

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl
          font-bold leading-tight"
        >
          Sobre{" "}
          <span className="text-green-400">
            Nature Defender
          </span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mt-4">
          Conoce más sobre nuestro videojuego y su propósito.
        </p>
      </div>

      {/* INFORMACIÓN DEL JUEGO */}
      <div
        className="grid grid-cols-1 md:grid-cols-2
        gap-8 lg:gap-12 items-center"
      >
        {/* IMAGEN */}
        <div className="overflow-hidden rounded-2xl
          border border-green-900/40 shadow-xl">
          <img
            src="/images/about.jpg"
            alt="Mundo de Nature Defender"
            className="w-full h-64 sm:h-80 lg:h-96
            object-cover hover:scale-105
            transition-transform duration-500"
          />
        </div>

        {/* TEXTO */}
        <div className="text-center md:text-left">

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl
            font-bold mb-5"
          >
            Nuestra{" "}
            <span className="text-green-400">
              misión
            </span>
          </h2>

          <p
            className="text-gray-300
            text-sm sm:text-base lg:text-lg
            leading-7 sm:leading-8 mb-6"
          >
            Nature Defender es un videojuego educativo
            que busca crear conciencia sobre la importancia
            del cuidado del medio ambiente mediante una
            experiencia interactiva de aventura y acción.
          </p>

          <p
            className="text-gray-400
            text-sm sm:text-base
            leading-7 mb-8"
          >
            A través de diferentes desafíos y escenarios,
            los jugadores aprenderán sobre los problemas
            ambientales y la importancia de proteger
            nuestros recursos naturales.
          </p>

          {/* MENSAJE DESTACADO */}
          <div
            className="flex flex-col sm:flex-row
            items-center md:items-start
            gap-3 sm:gap-4
            bg-green-500/10
            border border-green-500/20
            rounded-xl p-5"
          >
            <Earth
              size={30}
              className="text-green-400 shrink-0"
            />

            <span
              className="text-green-400
              font-semibold text-sm sm:text-base"
            >
              Juega, aprende y protege el planeta.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
