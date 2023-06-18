import React from 'react';

const SortCards = ({ 
  onSortByNameAZ,
  onSortByNameZA,
  onSortByAlbumAZ,
  onSortByAlbumZA,
  onSortByYear,
  onSortByYearRecent 
}) => {
  return (
    <div className="sort">
      <button onClick={onSortByNameAZ}>Sorteer op Naam (A-Z)</button>
      <button onClick={onSortByNameZA}>Sorteer op Naam (Z-A)</button>
      <button onClick={onSortByAlbumAZ}>Sorteer op Album (A-Z)</button>
      <button onClick={onSortByAlbumZA}>Sorteer op Album (Z-A)</button>
      <button onClick={onSortByYear}>Sorteer op Jaar (Oud-Nieuw)</button>
      <button onClick={onSortByYearRecent}>Sorteer op Jaar (Nieuw-Oud)</button>
    </div>
  );
}

export default SortCards;
