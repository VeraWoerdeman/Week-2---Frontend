import React from 'react'; 
import Footer from '../components/Footer'
import Header from '../components/Header'
import AddItemForm  from '../components/AddItemForm';
import Collection from '../pages/Collection'

function Home() {
  return (
    <div className="App">
      <Header />
      <AddItemForm />
      <Collection />
      <Footer />
    </div>
  );
}

export default Home;

// class Home extends React.Component { 
//   constructor(props) {
//     super(props);
//     this.state = {
//     albums: [],
//     currentPage: 1,
//     cardsPerPage: 5, 
//     selectedCategory: '', 
//     sortedalbums: '',
//     showBottomHeader: true,
//     showForm: false,
//     formData: {
//       name: '',
//       title: '',
//       year: '',
//       category: '',
//       image: '',
//     },
//   };  
// }
//   handleSortByNameAZ = () => {
//     const sortedalbums = [...this.state.albums].sort((a, b) => {
//       return a.name.localeCompare(b.name);
//     });
//     this.setState({ albums: sortedalbums, currentPage:1 });
//   }

//   handleSortByNameZA = () => {
//     const sortedalbums = [...this.state.albums].sort((a, b) => {
//       return b.name.localeCompare(a.name);
//     });
//     this.setState({ albums: sortedalbums, currentPage:1 });
//   }

//   handleSortByAlbumAZ = () => {
//     const sortedalbums = [...this.state.albums].sort((a, b) => {
//       return a.title.localeCompare(b.title);
//     });
//     this.setState({ albums: sortedalbums, currentPage:1 });
//   }

//   handleSortByAlbumZA = () => {
//     const sortedalbums = [...this.state.albums].sort((a, b) => {
//       return b.title.localeCompare(a.natitleme);
//     });
//     this.setState({ albums: sortedalbums, currentPage:1 });
//   }

//   handleSortByYear = () => {
//     const sortedalbums = [...this.state.albums].sort((a, b) => {
//       return a.year - b.year;
//     });
//     this.setState({ albums: sortedalbums, currentPage:1 });
//   }

//   handleSortByYearRecent = () => {
//     const sortedalbums = [...this.state.albums].sort((a, b) => {
//       return b.year - a.year;
//     });
//     this.setState({ albums: sortedalbums, currentPage:1 });
//   }

//   handlePageClick = (event) => {
//     this.setState({ currentPage: Number(event.target.id) });
//   }

//   handleNextPage = () => { 
//     const { currentPage, cardsPerPage, albums } = this.state;
//     const maxPage = Math.ceil(albums.length / cardsPerPage);
  
//     if (currentPage < maxPage) {
//       this.setState({ currentPage: currentPage + 1 });
//     }
//   }  

//   handlePreviousPage = () => { 
//     const { currentPage } = this.state;

//     if (currentPage > 1) {
//       this.setState({ currentPage: currentPage - 1 });
//     }
//   }

//   handleCategoryChange = (event) => {
//     const category = event.target.value;
//     this.setState({ selectedCategory: category, currentPage:1 });
//   }

//   toggleForm = () => {
//     this.setState(prevState => ({
//       showForm: !prevState.showForm
//     }));
//   } 
//   handleHomeScreen = () => {
//     const sortedalbums = [...this.state.albums].sort((a, b) => {
//       return a.id - b.id;
//     });
//     this.setState({
//       albums: sortedalbums,
//       selectedCategory: '',
//       currentPage:1,
//       showForm: false,
//     });
//       }

//   handleAddItem = (newItem) => {
//     const newId = this.state.albums[this.state.albums.length - 1].id + 1;
//     const itemWithId = { id: newId, ...newItem };
//     this.setState((prevState) => ({
//       albums: [...prevState.albums, itemWithId],
//       showForm: false,
//     }));
//   }; 
  
//   render() { 
//         return (
//             <div>
//             <Header
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
//               renderedCards
//             )}
//             <Collection></Collection>

//           </div>
//           <Footer />
//         </div>
//       </div>
//     );
        
//     }
// }
// export default Home;






