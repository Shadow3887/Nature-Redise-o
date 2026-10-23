function GalleryCard({ image, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(image)}
      className="group overflow-hidden rounded-2xl
        border border-green-900 hover:border-green-400
        cursor-pointer"
    >
      <img
        src={image}
        alt="Escena de Nature Defender"
        className="w-full h-64 object-cover
          group-hover:scale-110 transition duration-500"
      />
    </button>
  );
}

export default GalleryCard;