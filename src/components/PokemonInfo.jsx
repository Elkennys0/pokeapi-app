function PokemonInfo({ pokemon }) {
    return (
      <div className="pokemon-info">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Peso: {pokemon.weight}</p>
        <p>Altura: {pokemon.height}</p>
        <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      </div>
    );
  }
  
  export default PokemonInfo;