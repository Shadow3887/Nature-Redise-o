function CharacterCard({ character }) {
  return (
    <div className="group bg-surface rounded-2xl
      overflow-hidden border border-green-900
      hover:border-green-400 transition">

      <img
        src={character.image}
        alt={character.name}
        className="w-full h-80 object-cover
          group-hover:scale-105 transition duration-500"
      />

      <div className="p-6">
        <span className="text-green-400 text-sm">
          {character.role}
        </span>

        <h3 className="text-2xl font-bold mt-2">
          {character.name}
        </h3>

        <p className="text-gray-400 mt-3">
          {character.description}
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;