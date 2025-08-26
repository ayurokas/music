import { useRef, useState, useEffect } from "react";

export default function Player({ track }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setPlaying(true);
    }
  }, [track]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div className="fixed-bottom bg-dark text-white d-flex justify-content-between align-items-center p-2 px-3">
      {track ? (
        <>
          <span>{track.split("/").pop()}</span>
          <audio ref={audioRef} controls className="w-50">
            <source src={track} type="audio/mpeg" />
          </audio>
          <button className="btn btn-success" onClick={togglePlay}>
            {playing ? "⏸ Pause" : "▶️ Play"}
          </button>
        </>
      ) : (
        <span>Sélectionne un morceau pour écouter</span>
      )}
    </div>
  );
}
