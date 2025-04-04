import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PokemonCard({ pokemon }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(pokemon.url)
      .then((response) => {
        setPokemonDetails(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del Pokémon", error);
      });
  }, [pokemon.url]);

  if (!pokemonDetails) return <p>Cargando...</p>;

  return (
    <div className="pokemon-card">
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <Link to={`/pokemon/${pokemonDetails.id}`}>Ver detalles</Link>
    </div>
  );
}

export default PokemonCard;