import { useState } from "react";
import Sidebar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Library from "./components/Librairy/Librairy";
import Player from "./components/Player/Player";

export default function App() {
  const [page, setPage] = useState("library");
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div className="d-flex vh-100 bg-dark text-white">
      <Sidebar setPage={setPage} />

      <div className="flex-grow-1 d-flex flex-column">
        <Header />

        <div className="flex-grow-1 overflow-auto p-3">
          {page === "library" && <Library setCurrentTrack={setCurrentTrack} />}
        </div>

        <Player track={currentTrack} />
      </div>
    </div>
  );
}

