import React from 'react';
import Card from '../components/Cards'
import Header from '../components/Header';

class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            currentPage: 1,
            cardsPerPage: 5, 
            selectedCategory: '', 
            sortedAlbums: '',
        };  
    }
    componentDidMount() {
        fetch('http://localhost:4001/albums')
            .then(response => response.json())
            .then(data => {
                this.setState({ albums: data })
            })
    }

    componentDidMount() {
      fetch('http://localhost:4001/artist')
          .then(response => response.json())
          .then(data => {
              this.setState({ artists: data })
          })
  }

    handleSortByNameAZ = () => {
        const sortedAlbums = [...this.state.albums].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        this.setState({ albums: sortedAlbums, currentPage:1 });
    }

    handleSortByNameZA = () => {
        const sortedAlbums = [...this.state.albums].sort((a, b) => {
            return b.name.localeCompare(a.name);
        });
        this.setState({ albums: sortedAlbums, currentPage:1 });
    }

    handleSortByAlbumAZ = () => {
        const sortedAlbums = [...this.state.albums].sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        this.setState({ albums: sortedAlbums, currentPage:1 });
    }

    handleSortByAlbumZA = () => {
        const sortedAlbums = [...this.state.albums].sort((a, b) => {
            return b.title.localeCompare(a.natitleme);
        });
        this.setState({ albums: sortedAlbums, currentPage:1 });
    }

    handleSortByYear = () => {
        const sortedAlbums = [...this.state.albums].sort((a, b) => {
            return a.year - b.year;
        });
        this.setState({ albums: sortedAlbums, currentPage:1 });
    }

    handleSortByCategory = () => {
        const sortedAlbums = [...this.state.albums].sort((a, b) => {
            return a.category.localeCompare(b.category);
        });
        this.setState({ albums: sortedAlbums, currentPage:1 });
    }

    handlePageChange = (event) => {
        this.setState({ currentPage: Number(event.target.id) });
    }

    handleCategoryChange = (event) => {
        this.setState({ selectedCategory: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { albums, formData } = this.state;
        const newAlbum = {
            name: formData.name,
            title: formData.title,
            year: formData.year,
            category: formData.category,
            image: formData.image,
        };
        const newAlbums = [...albums, newAlbum];
        this.setState({ albums: newAlbums, showForm: false });
    }


    
     render() {
        const { albums, currentPage, cardsPerPage } = this.state;
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCards = albums.slice(indexOfFirstCard, indexOfLastCard);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(albums.length / cardsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handlePageChange}
                >
                    {number}
                </li>
            );
        });
        

   
        const renderCards = currentCards.map((album, index) => {
            return (
                <Card
                    key={index}
                    name={album.name}
                    title={album.title}
                    year={album.year}
                    category={album.category}
                    image={album.image}
                />
            )
        });
        return (
            <div className="collection">
                <Header />
                <div className="collection__container">
                    <div className="collection__container__header">
                        <h1>Collection</h1>
                        <div className="collection__container__header__buttons">
                            <button onClick={this.handleSortByNameAZ}>Sort by name A-Z</button>
                            <button onClick={this.handleSortByNameZA}>Sort by name Z-A</button>
                            <button onClick={this.handleSortByAlbumAZ}>Sort by album A-Z</button>
                            <button onClick={this.handleSortByAlbumZA}>Sort by album Z-A</button>
                            <button onClick={this.handleSortByYear}>Sort by year</button>
                            <button onClick={this.handleSortByCategory}>Sort by category</button>
                        </div>
                    </div>
                    <div className="collection__container__cards">
                        {renderCards}
                    </div>
                    <div className="collection__container__pagination">
                        <ul>
                            {renderPageNumbers}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Collection;
