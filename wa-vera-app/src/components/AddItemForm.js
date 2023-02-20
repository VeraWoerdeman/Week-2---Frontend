import React, { Component } from 'react';

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      year: '',
      category: '',
      image: '',
      collection: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name: this.state.name,
      title: this.state.title,
      year: this.state.year,
      category: this.state.category,
      image: this.state.image
    };
    const updatedCollection = [...this.state.collection, newItem];
    this.setState({ collection: updatedCollection, showForm: false });
    localStorage.setItem("collection", JSON.stringify(updatedCollection));
  };
  

  render() {
    const { name, title, year, category, image } = this.state;
    <form onSubmit={this.handleSubmit}></form>


    return (
      <form onSubmit={() => this.props.handleSubmit({ name, title, year, category, image })}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={title} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input type="text" id="year" name="year" value={year} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" value={category} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" name="image" value={image} onChange={this.handleInputChange} />
        </div>
        <div>
          <button type="submit">OK</button>
        </div>
      </form>
    );
  }
}

export default AddItemForm;
