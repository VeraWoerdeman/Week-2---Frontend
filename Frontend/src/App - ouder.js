import React, { Component } from 'react';
import './App.css';
import SortCards from './components/SortCards';
import Pagination from './components/Pagination';
import AddItemForm from './components/AddItemForm';

class App extends Component {
  state = {
    items: [], // Dit zou je verzameling van items zijn
    currentPage: 1,
    itemsPerPage: 5,
    showForm: false,
  };

  handleAddItem = (newItem) => {
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
      showForm: false,
    }));
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleSort = (items) => {
    this.setState({ items });
  };

  handleFilter = (items) => {
    this.setState({ items });
  };

  render() {
    const { items, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div className="App">
        <SortCards items={items} onSort={this.handleSort} />
        <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={this.handlePageChange} />
        {currentItems.map((item, index) => (
          <div key={index}>
            {/* Hier zou je de individuele item component renderen */}
          </div>
        ))}
        {this.state.showForm && (
          <AddItemForm onSubmit={this.handleAddItem} />
        )}
        <button onClick={() => this.setState({ showForm: true })}>
          Nieuw item toevoegen
        </button>
      </div>
    );
  }
}

export default App;
