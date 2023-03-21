export const API_BASE_URL = 'http://localhost:4001/api';


export const fetchArtists = async () => {
    const response = await fetch(`${API_BASE_URL}/artists`); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const artists = await response.json();
    return artists;
  };
