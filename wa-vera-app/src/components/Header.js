import React from 'react';

function Header({onSortByNameAZ, homePage, nextPage, toggleForm, previousPage, currentPage, onSortByNameZA, onSortByAlbumAZ, onSortByAlbumZA, onSortByYear, onSortByYearRecent, onCategoryChange}) {
  
  return (
    <header>
<div className="container mt-5">
<div className="container">
         <div className="jumbotron">
           <h1 className="display-3 text-center">Vinyl Collection</h1>
           <hr className="my-4"></hr>
           <nav className="navbar navbar-expand-lg navbar-light">
           <div className="container-fluid">

            {/* Button for sorting */}
           <div className="dropdown">
           <div className="nav-item dropdown">
           <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort by
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <button className="dropdown-item" value="Artist A-Z" onClick={onSortByNameAZ}>Artist A-Z</button>
              <button className="dropdown-item" value="Artist Z-A" onClick={onSortByNameZA}>Artist Z-A</button>
              <button className="dropdown-item" value="Album A-Z" onClick={onSortByAlbumAZ}>Album A-Z</button>
              <button className="dropdown-item" value="Album Z-A" onClick={onSortByAlbumZA}>Album Z-A</button>
              <button className="dropdown-item" value="Newest-oldest " onClick={onSortByYearRecent}>Newest-oldest</button>
              <button className="dropdown-item" value="Oldest-newest " onClick={onSortByYear}>Oldest-newest</button>
            </div>
          </div>
          </div>
          
          <button onClick={homePage} className="btn btn-light" id="home-btn">Home</button>
          <button onClick={toggleForm} className="btn btn-light" id="add-item-btn">Add vinyl</button>
           
           {/* Button for sorting genre */}
           <div className="dropdown">
           <div className="nav-item dropdown">
           <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButtonGenre" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Genre
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <button className="dropdown-item" value="Classical" onClick={onCategoryChange}>Classical</button>
              <button className="dropdown-item" value="Pop" onClick={onCategoryChange}>Pop</button>
              <button className="dropdown-item" value="Metal" onClick={onCategoryChange}>Metal</button>
              <button className="dropdown-item" value="Singer-Songwriter" onClick={onCategoryChange}>Singer-Songwriter</button>
              <button className="dropdown-item" value="Alternative" onClick={onCategoryChange}>Alternative</button>
              <button className="dropdown-item" value="Rock" onClick={onCategoryChange}>Rock</button>
            </div>
          </div>
           </div>
           </div>
           </nav>   
         </div>
         <div className="container-fluid text-center mt-3" >
            <div className="container-fluid current-page" id="current-page">Current Page: {currentPage}</div>
         <button onClick={previousPage} className="btn btn-light" id= "prev-page-btn"width="30">
        <img src="img/arrow-left.svg" alt="arrow-left" width="20" /> Previous
        </button>
         <button onClick={nextPage} className="btn btn-light" id="next-page-btn" width="30">
    <img src="img/arrow-right.svg" alt="arrow-right" width="20" /> Next
</button>
</div>
</div>
</div>
</header>
);

  }
export default Header;