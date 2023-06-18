import React, { useState } from 'react';

const AddItemForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    name: '',
    title: '',
    year: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Naam:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Titel:
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        Jaar:
        <input type="text" name="year" onChange={handleChange} />
      </label>
      <label>
        Categorie:
        <input type="text" name="category" onChange={handleChange} />
      </label>
      <label>
        Afbeelding:
        <input type="text" name="image" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddItemForm;
