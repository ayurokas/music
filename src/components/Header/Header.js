import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Recherche :", search);
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <form className="d-flex w-100" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Rechercher un artiste..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          🔍
        </button>
      </form>
    </nav>
  );
}
