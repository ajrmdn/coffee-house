import React from 'react';
function NewBrewForm(){
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

export default NewBrewForm;
