import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from '@mui/material/Button';

function PokemonDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos", error);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Cargando...</p>;
  if (!pokemon) return <p>Error al cargar los datos.</p>;

  return (
    <div className="pokemon-details-container">
      <ArrowBackIcon
        style={{ cursor: 'pointer', marginBottom: '16px' }}
        onClick={() => navigate('/')}
      />
      <div className="pokemon-details">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Peso: {pokemon.weight / 10} kg</p>
        <p>Altura: {pokemon.height / 10} m</p>
        <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
        <Button variant="contained" onClick={() => navigate('/')}>
          Regresar
        </Button>
      </div>
    </div>
  );
}

export default PokemonDetails;