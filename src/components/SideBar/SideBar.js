export default function Sidebar({ setPage }) {
  return (
    <div className="bg-dark d-flex flex-column p-3" style={{ width: "200px" }}>
      <h2 className="text-success mb-4">MySpotify</h2>
      <button className="btn btn-dark text-white mb-2" onClick={() => setPage("library")}>
        Bibliothèque
      </button>
      <button className="btn btn-dark text-white mb-2" onClick={() => setPage("search")}>
        Recherche
      </button>
    </div>
  );
}
