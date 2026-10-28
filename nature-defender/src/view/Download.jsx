
import { Monitor, Laptop } from "lucide-react";
import DownloadCard from "../components/DownloadCard";

function Download() {
  const systems = [
    {
      title: "Windows",
      icon: <Monitor size={50} />,
      file: "/downloads/NatureDefender.exe"
    },
    {
      title: "macOS",
      icon: <Laptop size={50} />,
      file: "/downloads/NatureDefender.dmg"
    }
  ];

  return (
    <section
      className="w-full max-w-7xl mx-auto
      px-5 sm:px-8 lg:px-12
      py-12 sm:py-16 lg:py-20"
    >
      {/* TÍTULO */}
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl
        font-bold text-center mb-4"
      >
        Descarga{" "}
        <span className="text-green-400">
          Nature Defender
        </span>
      </h1>

      {/* DESCRIPCIÓN */}
      <p
        className="text-center text-gray-400
        text-sm sm:text-base lg:text-lg
        mb-10 sm:mb-14"
      >
        Elige tu sistema operativo y comienza la aventura.
      </p>

      {/* TARJETAS DE DESCARGA */}
      <div
        className="grid grid-cols-1 md:grid-cols-2
        gap-6 sm:gap-8
        max-w-4xl mx-auto"
      >
        {systems.map((system) => (
          <DownloadCard
            key={system.title}
            {...system}
          />
        ))}
      </div>
    </section>
  );
}

export default Download;
