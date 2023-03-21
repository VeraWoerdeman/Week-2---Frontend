const baseUrl = 'http://localhost:4001'; 

function getAllArtists() {
  return fetch(`${baseUrl}/artists`)
    .then(response => response.json());
}

function getAllAlbums() {
    return fetch(`${baseUrl}/albums`)
      .then(response => response.json());
  }

  function getAllComposers() { 
    return fetch(`${baseUrl}/composers`)
    .then(response => response.json());
  }
