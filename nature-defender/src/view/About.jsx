import { Leaf, Earth } from "lucide-react";

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <div className="text-center mb-14">
        <Leaf size={50} className="text-green-400 mx-auto mb-5" />

        <h1 className="text-4xl font-bold">
          Sobre <span className="text-green-400">
            Nature Defender
          </span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/images/about.jpg"
          alt="Mundo de Nature Defender"
          className="rounded-2xl w-full object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold mb-5">
            Nuestra misión
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            Nature Defender es un videojuego educativo
            que busca crear conciencia sobre la importancia
            del cuidado del medio ambiente mediante una
            experiencia interactiva de aventura y acción.
          </p>

          <div className="flex items-center gap-3 text-green-400">
            <Earth size={28} />
            <span>Juega, aprende y protege el planeta.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;