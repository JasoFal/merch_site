import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.description}</h3>
      <h3>{props.price}</h3>
      <h3>{props.quantity}</h3>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number
};

export default Item;