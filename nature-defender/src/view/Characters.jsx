import { characters } from "../data/characters";
import CharacterCard from "../components/CharacterCard";

function Characters() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-4">
        Nuestros <span className="text-green-400">
          Personajes
        </span>
      </h1>

      <p className="text-gray-400 text-center mb-14">
        Conoce a los héroes y enemigos de esta aventura.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </section>
  );
}

export default Characters;