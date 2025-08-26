import { useEffect, useState } from "react";
import { getLibrary } from "../../api";

export default function Library({ setCurrentTrack }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getLibrary();
      setFiles(data);
    };
    load();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        {files.map((file, i) => (
          <div className="col-6 col-md-3 mb-3" key={i}>
            <div
              className="card bg-secondary text-white h-100"
              style={{ cursor: "pointer" }}
              onClick={() =>
                setCurrentTrack(`http://localhost:3001/api/music/${file}`)
              }
            >
              <div className="card-body">
                <h5 className="card-title">{file.replace(".mp3", "")}</h5>
                <p className="card-text">Clique pour jouer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
