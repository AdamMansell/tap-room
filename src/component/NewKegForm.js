import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

function NewKegForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegForm}>
        <input
          type='text'
          name='name'
          placeholder='Enter a Name' />
        <input
          type='text'
          name='brand'
          placeholder='Enter a Brand' />
        <input
          type='text'
          name='price'
          placeholder='Enter a Price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Enter the Alcohol Content' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )

  function handleNewKegForm(event) {
    event.preventDefault();
    props.onNewKegCreation({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pintsLeft: 124, id: v4() });
  }
};

export default NewKegForm;

NewKegForm.prototypes = {
  onNewKegCreation: PropTypes.func.isRequired
}