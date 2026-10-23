import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { Leaf, Gamepad2, Shield } from "lucide-react";

function Home() {
  const features = [
    {
      icon: <Leaf size={36} />,
      title: "Conciencia ambiental",
      description: "Aprende a proteger el medio ambiente."
    },
    {
      icon: <Gamepad2 size={36} />,
      title: "Aventura",
      description: "Explora escenarios y supera desafíos."
    },
    {
      icon: <Shield size={36} />,
      title: "Defiende la naturaleza",
      description: "Enfrenta enemigos que amenazan el planeta."
    }
  ];

  return (
    <>
      <Hero />

      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Descubre <span className="text-green-400">
            Nature Defender
          </span>
        </h2>

        <p className="text-gray-400 text-center mb-14">
          Una aventura donde cada acción importa.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-surface p-8 rounded-2xl
                border border-green-900/50
                hover:border-green-400
                hover:-translate-y-2 transition"
            >
              <div className="text-green-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/about"
            className="text-green-400 hover:underline"
          >
            Conocer más sobre el proyecto →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;