import React, { Component } from 'react';
import Card from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import AddItemForm from './components/AddItemForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    albums: [],
    currentPage: 1,
    cardsPerPage: 5, 
    selectedCategory: '', 
    sortedAlbums: '',
    showBottomHeader: true,
    showForm: false,
    formData: {
      name: '',
      title: '',
      year: '',
      category: '',
      image: '',
    },
  };  
  }
  componentDidMount() {
		fetch("http://localhost:4001/albums")
		  .then((response) => response.json())
		  .then((data) => {
			this.setState({ albums: data });
      console.log(data);
		  })
		  .catch((error) => {
			console.error("Error fetching albums", error);
		  });
}
  handleSortByNameAZ = () => {
    const sortedalbums = [...this.state.albums].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ albums: sortedalbums, currentPage:1 });
  }

  handleSortByNameZA = () => {
    const sortedalbums = [...this.state.albums].sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    this.setState({ albums: sortedalbums, currentPage:1 });
  }

  handleSortByAlbumAZ = () => {
    const sortedalbums = [...this.state.albums].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    this.setState({ albums: sortedalbums, currentPage:1 });
  }

  handleSortByAlbumZA = () => {
    const sortedalbums = [...this.state.albums].sort((a, b) => {
      return b.title.localeCompare(a.natitleme);
    });
    this.setState({ albums: sortedalbums, currentPage:1 });
  }

  handleSortByYear = () => {
    const sortedalbums = [...this.state.albums].sort((a, b) => {
      return a.year - b.year;
    });
    this.setState({ albums: sortedalbums, currentPage:1 });
  }

  handleSortByYearRecent = () => {
    const sortedalbums = [...this.state.albums].sort((a, b) => {
      return b.year - a.year;
    });
    this.setState({ albums: sortedalbums, currentPage:1 });
  }

  handlePageClick = (event) => {
    this.setState({ currentPage: Number(event.target.id) });
  }

  handleNextPage = () => { 
    const { currentPage, cardsPerPage, albums } = this.state;
    const maxPage = Math.ceil(albums.length / cardsPerPage);
  
    if (currentPage < maxPage) {
      this.setState({ currentPage: currentPage + 1 });
    }
  }  

  handlePreviousPage = () => { 
    const { currentPage } = this.state;

    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  }

  handleCategoryChange = (event) => {
    const category = event.target.value;
    this.setState({ selectedCategory: category, currentPage:1 });
  }

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  } 
  handleHomeScreen = () => {
    const sortedalbums = [...this.state.albums].sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({
      albums: sortedalbums,
      selectedCategory: '',
      currentPage:1,
      showForm: false,
    });
      }

  handleAddItem = (newItem) => {
    const newId = this.state.albums[this.state.albums.length - 1].id + 1;
    const itemWithId = { id: newId, ...newItem };
    this.setState((prevState) => ({
      albums: [...prevState.albums, itemWithId],
      showForm: false,
    }));
  };

  render() {
    const {
      albums,
      currentPage,
      cardsPerPage,
      selectedCategory,
      formData,
      showBottomHeader,
      showForm,
    } = this.state;
  
    const filteredAlbums = selectedCategory
      ? albums.filter((album) => album.category === selectedCategory)
      : albums;
  
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredAlbums.slice(
      indexOfFirstCard,
      indexOfLastCard
    );
    const renderedCards = currentCards.map((album) => (
      <Card
        key={album.AlbumID}
        name={album.AlbumArtist}
        title={album.Title}
        year={album.YearRelease}
        category={album.Genre}
        image={album.Image}
      />
    ));
  
    return (
      <div>
        <Header
          onSortByNameAZ={this.handleSortByNameAZ}
          onSortByNameZA={this.handleSortByNameZA}
          onSortByAlbumAZ={this.handleSortByAlbumAZ}
          onSortByAlbumZA={this.handleSortByAlbumZA}
          onSortByYear={this.handleSortByYear}
          onSortByYearRecent={this.handleSortByYearRecent}
          nextPage={this.handleNextPage}
          previousPage={this.handlePreviousPage}
          onCategoryChange={this.handleCategoryChange}
          homePage={this.handleHomeScreen}
          toggleForm={this.toggleForm}
        />
        {showForm && (
          <AddItemForm
            formData={formData}
            onChange={this.handleFormChange}
            onSubmit={this.handleAddItem}
          />
        )}
          {renderedCards}
        
        {showBottomHeader && (
          <Footer
            currentPage={currentPage}
            cardsPerPage={cardsPerPage}
            totalCards={filteredAlbums.length}
            onPageClick={this.handlePageClick}
          />
        )}
      </div>
    );
  }
}
export default App;


//   render() {
    
//     const { albums, currentPage, cardsPerPage, selectedCategory } = this.state;
//     const filteredalbums = selectedCategory
//       ? albums.filter(albums => albums.category === selectedCategory)
//       : albums;
//     const indexOfLastCard = currentPage * cardsPerPage;
//     const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//     const currentCards = filteredalbums.slice(indexOfFirstCard, indexOfLastCard);
//     const renderedCards = currentCards.map(composer => (
//       <Card
//         name={albums.Title}
//         key={albums.AlbumID}
//         artist={albums.Artist}
//         year={albums.YearRelease}
//         category={albums.Genre}
//         image={albums.image}
//       />
      
//     ));
  
//     return (
//       <div>
//         <Header
//          onSortByYearRecent={this.handleSortByYearRecent}
//          onSortByNameAZ={this.handleSortByNameAZ}
//          onSortByNameZA={this.handleSortByNameZA}
//          onSortByAlbumAZ={this.handleSortByAlbumAZ}
//          onSortByAlbumZA={this.handleSortByAlbumZA}
//          onSortByYear={this.handleSortByYear}
//          nextPage={this.handleNextPage}
//          previousPage={this.handlePreviousPage}
//          onCategoryChange={this.handleCategoryChange}
//          homePage={this.handleHomeScreen}
//          toggleForm={this.toggleForm}
//          currentPage={currentPage}
//         />
//        <div className="App">
//           <div className="row row-col mt-3 justify-content-center">
//             {this.state.showForm ? (
//               <AddItemForm handleAddItem={this.handleAddItem} 
//               handleCancel={this.handleHomeScreen}/>
//             ) : (
//               //renderedCards
//               currentCards.map(album => <Card {...album} key={album.id} />)
//             )}

//           </div>
//           <Footer />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

