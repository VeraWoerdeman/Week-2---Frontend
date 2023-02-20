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
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" className="form-control" value={this.state.title} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input type="text" name="year" id="year" className="form-control" value={this.state.year} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" name="category" id="category" className="form-control" value={this.state.category} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="text" name="image" id="image" className="form-control" value={this.state.image} onChange={this.handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add vinyl</button>
      </form>
    );
  }
}

export default AddItemForm;
