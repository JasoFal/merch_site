import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewItemForm(props) {

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          text='text'
          name='name'
          placeholder="Name" />
        <textarea
          text='text'
          name='description'
          placeholder='Description'/>
        <input
          text='text'
          name='price'
          placeholder='Price'/>
        <input
          text='text'
          name='quantity'
          placeholder='Quantity'/>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;