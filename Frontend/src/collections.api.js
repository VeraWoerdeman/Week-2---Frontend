import { api } from './Api.js';

export function getAllArtists() {
    return api.get('/artists')
        .then(response => response.data);
}

export function getAllAlbums() {
    return api.get('/albums')
        .then(response => response.data);
}

export function getGenres() {
    return api.get('/genres')
        .then(response => response.data);
}

export function storeItem(item) {
    return api.post('/albums', item)
        .then(response => response.data);
}

export function updateItem(item) {
    return api.put(`/albums/${item.id}`, item)
        .then(response => response.data);
}

export function deleteItem(id) {
    return api.delete(`/albums/${id}`)
        .then(response => response.data);
}
