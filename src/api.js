const API_KEY = "TA_CLE_API_LIDARR";
const LIDARR_URL = "http://localhost:8686/api/v1";

export const searchArtists = async (term) => {
  const res = await fetch(`${LIDARR_URL}/artist/lookup?term=${term}`, {
    headers: { "X-Api-Key": API_KEY },
  });
  return res.json();
};

export const addArtist = async (artist) => {
  await fetch(`${LIDARR_URL}/artist`, {
    method: "POST",
    headers: {
      "X-Api-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ artistId: artist.id }),
  });
};

export const getArtists = async () => {
  const res = await fetch(`${LIDARR_URL}/artist`, {
    headers: { "X-Api-Key": API_KEY },
  });
  return res.json();
};

export const getLibrary = async () => {
  const res = await fetch("http://localhost:3001/api/library");
  return res.json();
};
