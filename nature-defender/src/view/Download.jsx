import { Monitor, Laptop, Terminal } from "lucide-react";
import DownloadCard from "../components/DownloadCard";

function Download() {
  const systems = [
    {
      title: "Windows",
      icon: <Monitor size={50} />,
      file: "/downloads/NatureDefender.exe"
    },
    {
      title: "Linux",
      icon: <Terminal size={50} />,
      file: "/downloads/NatureDefender.AppImage"
    },
    {
      title: "macOS",
      icon: <Laptop size={50} />,
      file: "/downloads/NatureDefender.dmg"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-4">
        Descarga <span className="text-green-400">
          Nature Defender
        </span>
      </h1>

      <p className="text-center text-gray-400 mb-14">
        Elige tu sistema operativo y comienza la aventura.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {systems.map((system) => (
          <DownloadCard key={system.title} {...system} />
        ))}
      </div>
    </section>
  );
}

export default Download;