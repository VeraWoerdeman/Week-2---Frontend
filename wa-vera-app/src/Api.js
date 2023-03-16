const baseUrl = 'http://localhost:3002'; 

function getAllArtists() {
  return fetch(`${baseUrl}/artists`)
    .then(response => response.json());
}

function getAllAlbums() {
    return fetch(`${baseUrl}/albums`)
      .then(response => response.json());
  }

  function getAllComposers() { 
    return fetch(`${baseUrl}/albums`).then(response => response.json());
  }
