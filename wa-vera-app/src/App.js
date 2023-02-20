import React, { Component } from 'react';
import Card from './components/Cards';
import composers from './Composers.json'
import Header from './components/Header';
import Footer from './components/Footer';
import AddItemForm from './components/AddItemForm';



class App extends Component {
  
  state = {
    composers: composers,
    currentPage: 1,
    cardsPerPage: 5, 
    selectedCategory: '', 
    sortedComposers: '',
    showForm: false,
    formData: {
      name: '',
      title: '',
      year: '',
      category: '',
      image: '',
    },

  };  


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

  handleAddItem = e => {
    e.preventDefault();
    const { name, title, year, category, image } = this.state.formData;
    const newId = this.state.composers[this.state.composers.length - 1].id + 1;
    const newItem = { id: newId, name, title, year, category, image };
    const newComposers = [...this.state.composers, newItem];
    this.setState({
      composers: newComposers,
      filteredComposers: newComposers,
      showForm: false,
      formData: {
        name: '',
        title: '',
        year: '',
        category: '',
        image: '',
      },
    });
  };
    
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

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
  
    // if (this.state.showForm) {
    //   renderedCards.push(
    //     <Card
    //       key="new-card"
    //       name={this.formData.name}
    //       title={this.formData.title}
    //       year={this.formData.year}
    //       category={this.formData.category}
    //       image={this.formData.image}
    //     />
    //   );
    // }
  
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
              <AddItemForm
                handleSubmitItem={this.handleAddItem}
                handleInputChange={this.handleInputChange}
                formData={this.state.formData}
                handleCancel={this.handleHomeScreen}
              />
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



























// class App extends React.Component {

//     state = {
//       composers: composers
//     }
  
//     handleSort = () => {
//       const sortedComposers = [...this.state.composers].sort((a, b) => {
//         return a.name.localeCompare(b.name);
//       });
  
//       this.setState({ composers: sortedComposers });
//     }
//     render() {
//       return (
//         <div>
//           <Header onSort={this.handleSort} />
          
//           <div className="App">  
//           <div className="row row-cols-2 justify-content-center">            
//             {this.state.composers.map(card => (
//               <Card
//                 key={card.id}
//                 name={card.name}
//                 title={card.title}
//                 year={card.year}
//                 category={card.category}
//                 image={card.image}
//               />
//             ))}
//           </div>
//           <Footer />
//         </div>
//         </div>
//       );
//     }
//   }

// export default App;








// function App() {
//   return (
//     <div className="App">      
//       {composers.map(card => (
//         <Card
//           key={card.title}
//           title={card.title}
//           description={card.description}
//           image={card.image}
//         />
//       ))}
//     </div>
    
//   );

  








// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: []
//     }
//   }
    

  
//   sortAlphabetically() { 
//     const composers = require('./Composers')
//     var data = [ { composers }];
//     data.sort((a,b) => { 
//       if (a.name < b.name) { 
//         return -1;
//       }
//     });
//     this.render()    
//   }
  



//   // componentDidMount() {    
//   //   fetch('./public/Composers.js')
//   //   .then(response => response.json())
//   //   .then((json) => console.log(json));  }

//     render() {
//     const composers = require('./Composers')
//     return (
//       <div className="container">
//         <div class="jumbotron">
//           <h1 class="display-3 text-center">Vinyl Collection</h1>
//           <hr class="my-4"></hr>
//           <nav class="navbar navbar-expand-lg navbar-light">
//           <div class="container-fluid">
//             <button onclick="sortAlphabetically()">Click</button>
          
//           <button type="button" class="btn btn-light">Sort</button>
//           <button type="button" class="btn btn-light">Sort</button>
//           </div>
//           </nav>
//          </div>
        
//         <div class="row row-cols-2 justify-content-center">
          
//         {composers.map((post) => (      
           
//             <div class = "col-sm-5">
//           <div className="card md-4 mt-3" key={post.id}>        
//             <div className="card-header text-center h5">
//               {post.name} - {post.title}              
//               <div className="mb-2 text-center text-muted" id="year"> {post.year} </div>
//               {/* <div class="card-img-top">{post.image} </div> */}
//             </div>
            
//             <div className="card-body">        
//             <img className="d-block" src={post.image} alt={post.alt}
//             height="180"  />
//             </div>

//             <div className="card-footer">
//             <div className="mb-2 text-center text-muted" >{post.category} </div>
//               </div>
//           </div>
//           </div>      
        
//         ))}
        
//         <div className="container mt-5">
//         <div class="jumbotron">
//         <hr class="my-4"></hr>
//           <h1 class="display-6 text-center">Vinyl Collection</h1>
//           <h4 class="text-center">Web Applications</h4>
//           <h6 class="text-center">15005755 - Vera Woerdeman</h6>
         
//          </div>
//         </div>   
//  </div>   
       
//       </div>
       
//     );
//   }


// }
// export default App;