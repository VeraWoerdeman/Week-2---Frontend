import React from 'react'; 
import Footer from '../components/Footer'
import Header from '../components/Header'
import AddItemForm  from '../components/AddItemForm';
import Collection from '../pages/Collection'

class Home extends React.Component { 
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
            <Collection></Collection>

          </div>
          <Footer />
        </div>
      </div>
    );
        
    }
}
export default Home;