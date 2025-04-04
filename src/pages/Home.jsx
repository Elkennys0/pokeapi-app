import { useState } from "react";
import axios from "axios";
import CustomizedTables from "../components/CustomizedTables";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
      .then((response) => {
        const filteredPokemons = response.data.results.filter(pokemon =>
          pokemon.name.startsWith(searchTerm.toLowerCase()) ||
          pokemon.url.split('/')[6] === searchTerm
        );
        setPokemons(filteredPokemons);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al obtener los datos. Verifica el nombre o número del Pokémon.");
        setLoading(false);
      });
  };

  return (
    <div className="search-container">
      <h1>Buscar Pokémon</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nombre, inicial o número del Pokémon"
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {pokemons.length > 0 && <CustomizedTables pokemons={pokemons} />}
    </div>
  );
}

export default Home;