import React from 'react';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      year: '',
      category: '',
      image: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { ...this.state };
    this.props.handleAddItem(newItem);
    this.setState({
      name: '',
      title: '',
      year: '',
      category: '',
      image: '',
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, title, year, category, image } = this.state;
    return (
      <div className="col-lg-auto d-block justify-content-center">
      <form onSubmit={this.handleSubmit}>
        <div className="card form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            required
          />
        </div>

        <div className="card form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.handleInputChange}
            required
          />
        </div>

        <div className=" card form-group">
          <label htmlFor="year">Year: </label>
          <input
            type="number"
            id="year"
            name="year"
            value={year}
            onChange={this.handleInputChange}
            required
          />
        </div>

        <div className="card form-group">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={this.handleInputChange}
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="Classical">Classical</option>
            <option value="Pop">Pop</option>
            <option value="Metal">Metal</option>
            <option value="Singer-Songwriter">Singer-Songwriter</option>
            <option value="Alternative">Alternative</option>
            <option value="Rock">Rock</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="card form-group">
          <label htmlFor="image">Image: </label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="container justify-content-center">
        <button type="submit" className="btn btn-primary mr-2">Submit</button>
        <button type="button" className="btn btn-secondary" onClick={this.props.handleCancel}
        >
          Cancel
        </button>
        </div>
      </form>
      </div>
    );
  }
}

export default AddItemForm;
