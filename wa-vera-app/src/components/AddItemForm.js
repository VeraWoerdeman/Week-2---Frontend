import React, { Component } from 'react';

class AddItemForm extends Component {
  state = {
    name: '',
    title: '',
    year: '',
    category: '',
    image: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      title: '',
      year: '',
      category: '',
      image: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Artist Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Album Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            className="form-control"
            id="year"
            name="year"
            value={this.state.year}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Genre</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={this.state.category}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={this.state.image}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2" onClick={this.props.handleSubmitItem}>
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.props.handleCancel}
        >
          Cancel
        </button>
      </form>
    );
  }
}

export default AddItemForm;
