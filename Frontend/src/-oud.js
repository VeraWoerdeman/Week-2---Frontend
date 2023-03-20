import React, { Component } from 'react';
import Card from './components/Cards';
import composers from './Composers.json'
import Header from './components/Header';
import Footer from './components/Footer';
import AddItemForm from './components/AddItemForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    composers: composers,
    currentPage: 1,
    cardsPerPage: 5, 
    selectedCategory: '', 
    sortedComposers: '',
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


  handleSortByNameAZ = () => {
    const sortedComposers = [...this.state.composers].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ composers: sortedComposers, currentPage:1 });
  }

  handleSortByNameZA = () => {
    const sortedComposers = [...this.state.composers].sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    this.setState({ composers: sortedComposers, currentPage:1 });
  }

  handleSortByAlbumAZ = () => {
    const sortedComposers = [...this.state.composers].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    this.setState({ composers: sortedComposers, currentPage:1 });
  }

  handleSortByAlbumZA = () => {
    const sortedComposers = [...this.state.composers].sort((a, b) => {
      return b.title.localeCompare(a.natitleme);
    });
    this.setState({ composers: sortedComposers, currentPage:1 });
  }

  handleSortByYear = () => {
    const sortedComposers = [...this.state.composers].sort((a, b) => {
      return a.year - b.year;
    });
    this.setState({ composers: sortedComposers, currentPage:1 });
  }

  handleSortByYearRecent = () => {
    const sortedComposers = [...this.state.composers].sort((a, b) => {
      return b.year - a.year;
    });
    this.setState({ composers: sortedComposers, currentPage:1 });
  }

  handlePageClick = (event) => {
    this.setState({ currentPage: Number(event.target.id) });
  }

  handleNextPage = () => { 
    const { currentPage, cardsPerPage, composers } = this.state;
    const maxPage = Math.ceil(composers.length / cardsPerPage);
  
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
    const sortedComposers = [...this.state.composers].sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({
      composers: sortedComposers,
      selectedCategory: '',
      currentPage:1,
      showForm: false,
    });
      }

  handleAddItem = (newItem) => {
    const newId = this.state.composers[this.state.composers.length - 1].id + 1;
    const itemWithId = { id: newId, ...newItem };
    this.setState((prevState) => ({
      composers: [...prevState.composers, itemWithId],
      showForm: false,
    }));
  };

  render() {
    
    const { composers, currentPage, cardsPerPage, selectedCategory } = this.state;
    const filteredComposers = selectedCategory
      ? composers.filter(composer => composer.category === selectedCategory)
      : composers;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredComposers.slice(indexOfFirstCard, indexOfLastCard);
    const renderedCards = currentCards.map(composer => (
      <Card
        name={composer.name}
        key={composer.id}
        title={composer.title}
        year={composer.year}
        category={composer.category}
        image={composer.image}
      />
      
    ));
  
    return (
      <div>
        <Header
         onSortByYearRecent={this.handleSortByYearRecent}
         onSortByNameAZ={this.handleSortByNameAZ}
         onSortByNameZA={this.handleSortByNameZA}
         onSortByAlbumAZ={this.handleSortByAlbumAZ}
         onSortByAlbumZA={this.handleSortByAlbumZA}
         onSortByYear={this.handleSortByYear}
         nextPage={this.handleNextPage}
         previousPage={this.handlePreviousPage}
         onCategoryChange={this.handleCategoryChange}
         homePage={this.handleHomeScreen}
         toggleForm={this.toggleForm}
         currentPage={currentPage}
        />
       <div className="App">
          <div className="row row-col mt-3 justify-content-center">
            {this.state.showForm ? (
              <AddItemForm handleAddItem={this.handleAddItem} 
              handleCancel={this.handleHomeScreen}/>
            ) : (
              renderedCards
            )}

          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

