import { useState } from "react";
import { X } from "lucide-react";
import GalleryCard from "../components/GalleryCard";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg"
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-4">
        Galería del <span className="text-green-400">
          Juego
        </span>
      </h1>

      <p className="text-center text-gray-400 mb-12">
        Explora los escenarios de Nature Defender.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <GalleryCard
            key={image}
            image={image}
            onClick={setSelected}
          />
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100]
            bg-black/95 flex items-center
            justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-8 right-8 text-white"
            aria-label="Cerrar imagen"
          >
            <X size={32} />
          </button>

          <img
            src={selected}
            alt="Vista ampliada del juego"
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;