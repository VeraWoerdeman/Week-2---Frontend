import React from 'react';
import Card from '../components/Cards'

class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        composers: [],
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

    componentDidMount()  {
    fetch("http://localhost:3002/albums/")
		  .then((response) => response.json())
		  .then((data) => {
			this.setState({ collection: data });
		  })
		  .catch((error) => {
			console.error("Error fetching collection:", error);
		  });
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

}
    

export default Collection;
