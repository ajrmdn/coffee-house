import React from 'react';
import PropTypes from 'prop-types';

function NewBrewForm(props) {
  let _name = null;
  let _flavor = null;
  let _brand = null;
  let _price = null;

  function handleNewBrewFormSubmission(event) {
    event.preventDefault();

    props.onNewBrewAdd({
        name: _name.value,
        flavor: _brewery.value,
        brand: _brand.value,
        price: _price.value,
      });

    return (
      <div>
        <form>
          <input
            type='text'
            id='name'
            placeholder='name'/>

          <input
            type='text'
            id='flavor'
            placeholder='flavor'/>

          <input
            type='text'
            id='brand'
            placeholder='brand'/>

          <input
            type='text'
            id='price'
            placeholder='price'/>

          <button type='submit'>Add Brew!</button>
        </form>
      </div>
    );
  }
}

NewBrewForm.propTypes = {
  onShowingBrew: PropTypes.func,
  onNamingBrew: PropTypes.func,
  onFlavorBrew: PropTypes.func,
  onBrandBrew: PropTypes.func,
  onPricingBrew: PropTypes.func,
};

export default NewBrewForm;
