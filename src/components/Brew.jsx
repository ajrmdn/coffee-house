import React from "react";
import PropTypes from "prop-types";


function Brew(props) {

  const brewStyles = {
    color: 'red',
    border: 'solid 1px red',
  };

  return (
    <div>
      <hr/>
      <h3 style={brewStyles}>Name: {props.name}</h3>
      <h3>Flavor:  {props.flavor}</h3>
      <h3>Brand: {props.brand}</h3>
      <h3>Price: {props.price}</h3>
      <img src={props.image}/>
      <hr/>
    </div>
  );
}

Brew.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};

export default Brew;
