import React, { Component } from 'react'
import Card from '../components/Cards'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddItemForm from '../components/AddItemForm';


class Collection extends Component {
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
        fetch('http://localhost:4001/albums')
            .then(response => response.json())
            .then(albums => this.setState({ albums }))
            .catch(err => console.error(err));
    }
    displayAlbums(albums) {
        return albums.map(album => (
          <div key={album.id} className='album'>
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
            <img src={album.image} alt={album.title} />
          </div>
        ));
      }

    handleSortByNameAZ = () => {
        const sortedAlbums = [...this.state.albums].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        this.setState({ albums: sortedAlbums, currentPage: 1 });
    }


    handleSortByNameZA = () => {
        const sortedAlbums = [...this.state.albums].sort((a, b) => {
            return b.name.localeCompare(a.name);
        });
        this.setState({ albums: sortedAlbums, currentPage: 1 });
    }

    render() {
        const { albums } = this.state;
        return (
            <div className="App">
                <Header />
                <AddItemForm />
                <Collection />
                <Card/>
                <Footer />
            </div>
        );
    }
}


    export default Collection;








// import React from 'react';
// import Card from '../components/Cards'
// import Header from '../components/Header';
// export const API_BASE_URL = 'http://localhost:4001/api';

// class Collection extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             albums: [],
//             currentPage: 1,
//             cardsPerPage: 5, 
//             selectedCategory: '', 
//             sortedAlbums: '',
//         };  

     

        
    
//     async function loadAlbums() {
//         try {
//           const response = await fetch('http://localhost:4001/albums');
//           const albums = await response.json();
//           displayAlbums(albums);
//         } catch (err) {
//           console.error(err);
//         }
//       }
    
// }
//    fetchArtists = async () => {
//         const response = await fetch(`${API_BASE_URL}/artists`); 
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const artists = await response.json();
//         return artists;
//       };
  



  
//     handleSortByNameAZ = () => {
//         const sortedAlbums = [...this.state.albums].sort((a, b) => {
//             return a.name.localeCompare(b.name);
//         });
//         this.setState({ albums: sortedAlbums, currentPage:1 });
//     }

//     handleSortByNameZA = () => {
//         const sortedAlbums = [...this.state.albums].sort((a, b) => {
//             return b.name.localeCompare(a.name);
//         });
//         this.setState({ albums: sortedAlbums, currentPage:1 });
//     }

//     handleSortByAlbumAZ = () => {
//         const sortedAlbums = [...this.state.albums].sort((a, b) => {
//             return a.title.localeCompare(b.title);
//         });
//         this.setState({ albums: sortedAlbums, currentPage:1 });
//     }

//     handleSortByAlbumZA = () => {
//         const sortedAlbums = [...this.state.albums].sort((a, b) => {
//             return b.title.localeCompare(a.natitleme);
//         });
//         this.setState({ albums: sortedAlbums, currentPage:1 });
//     }

//     handleSortByYear = () => {
//         const sortedAlbums = [...this.state.albums].sort((a, b) => {
//             return a.year - b.year;
//         });
//         this.setState({ albums: sortedAlbums, currentPage:1 });
//     }

//     handleSortByCategory = () => {
//         const sortedAlbums = [...this.state.albums].sort((a, b) => {
//             return a.category.localeCompare(b.category);
//         });
//         this.setState({ albums: sortedAlbums, currentPage:1 });
//     }

//     handlePageChange = (event) => {
//         this.setState({ currentPage: Number(event.target.id) });
//     }

//     handleCategoryChange = (event) => {
//         this.setState({ selectedCategory: event.target.value });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const { albums, formData } = this.state;
//         const newAlbum = {
//             name: formData.name,
//             title: formData.title,
//             year: formData.year,
//             category: formData.category,
//             image: formData.image,
//         };
//         const newAlbums = [...albums, newAlbum];
//         this.setState({ albums: newAlbums, showForm: false });
//     }

 
      


    
//      render() {
//         const { albums, currentPage, cardsPerPage } = this.state;
//         const indexOfLastCard = currentPage * cardsPerPage;
//         const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//         const currentCards = albums.slice(indexOfFirstCard, indexOfLastCard);
//         const pageNumbers = [];
//         for (let i = 1; i <= Math.ceil(albums.length / cardsPerPage); i++) {
//             pageNumbers.push(i);
//         }
//         const renderPageNumbers = pageNumbers.map(number => {
//             return (
//                 <li
//                     key={number}
//                     id={number}
//                     onClick={this.handlePageChange}
//                 >
//                     {number}
//                 </li>
//             );
//         });
        

   
//         const renderCards = currentCards.map((album, index) => {
//             return (
//                 <Card
                
//                     key={index}
//                     name={album.name}
//                     title={album.title}
//                     year={album.year}
//                     category={album.category}
//                     image={album.image}
//                 />
//             )
//         });
//         return (
//             <div className="collection">
//                 <Header />
//                 <div className="collection__container">
//                     <div className="collection__container__header">
//                         <h1>Collection</h1>
//                         <div className="collection__container__header__buttons">
//                             <button onClick={this.handleSortByNameAZ}>Sort by name A-Z</button>
//                             <button onClick={this.handleSortByNameZA}>Sort by name Z-A</button>
//                             <button onClick={this.handleSortByAlbumAZ}>Sort by album A-Z</button>
//                             <button onClick={this.handleSortByAlbumZA}>Sort by album Z-A</button>
//                             <button onClick={this.handleSortByYear}>Sort by year</button>
//                             <button onClick={this.handleSortByCategory}>Sort by category</button>
//                         </div>
//                     </div>
//                     <div className="collection__container__cards">
//                         {renderCards}
//                     </div>
//                     <div className="collection__container__pagination">
//                         <ul>
//                             {renderPageNumbers}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Collection;
