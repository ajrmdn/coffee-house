import React from 'react';
import Brew from './Brew';
import PropTypes from 'prop-types';

function BrewList(props) {

  return (
    <div>
      <hr/>
      {props.brewList.map((brew, index) =>
        <Brew name={brew.name}
          flavor={brew.flavor}
          brand={brew.brand}
          price={brew.price}
          image={brew.image}
          key={index} />
      )}
    </div>
  );
}

BrewList.propTypes = {
  brewList: PropTypes.array,
};

export default BrewList;
