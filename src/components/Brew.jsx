import React from "react";
import PropTypes from "prop-types";

function Brew(props){

  return (
    <div>
      <hr/>
      <h3>{props.name}: Morning Brew</h3>
      <h3>{props.flavor}: Waking up with Lake</h3>
      <h3>{props.brand}: Blake Brews</h3>
      <h3>{props.price}: $3</h3>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string
};

export default Brew;
