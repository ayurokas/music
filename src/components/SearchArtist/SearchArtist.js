import { useState } from "react";
import { searchArtists, addArtist } from "../../api";

export default function SearchArtist({ refreshLibrary }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchArtists(query);
    setResults(data);
  };

  const handleAdd = async (artist) => {
    await addArtist(artist);
    alert("Artiste ajouté !");
    refreshLibrary();
  };

  return (
    <div>
      <h2>Recherche d'artistes</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Nom de l'artiste"
      />
      <button onClick={handleSearch}>Rechercher</button>

      <ul>
        {results.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button onClick={() => handleAdd(artist)}>Ajouter</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
