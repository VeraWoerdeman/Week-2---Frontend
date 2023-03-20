import React from 'react';
import Card from '../components/Cards'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddItemForm from '../components/AddItemForm';

class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        albums: [],
        currentPage: 1,
        cardsPerPage: 5, 
        selectedCategory: '', 
        sortedalbums: '',
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
    fetch("http://localhost:4001/albums/")
		  .then((response) => response.json())
		  .then((data) => {
			this.setState({ albums: data });
		  })
		  .catch((error) => {
			console.error("Error fetching collection:", error);
		  });
	  }
    
 

  
  render() {
    const { albums, currentPage, cardsPerPage, selectedCategory } = this.state;
    const filteredalbums = selectedCategory
      ? albums.filter(composer => composer.category === selectedCategory)
      : albums;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredalbums.slice(indexOfFirstCard, indexOfLastCard);
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
      {renderedCards}
    )
  }
}

    

export default Collection;
