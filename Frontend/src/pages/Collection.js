import React from 'react';
import Card from '../components/Cards'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddItemForm from '../components/AddItemForm';

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
    fetch("http://localhost:4001/albums/")
		  .then((response) => response.json())
		  .then((data) => {
			this.setState({ collection: data });
		  })
		  .catch((error) => {
			console.error("Error fetching collection:", error);
		  });
	  }
    
 

  
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
      {renderedCards}
    )
  }
}

    

export default Collection;
