import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
        <h3>{props.quantity}</h3>
        <hr />
        <button onClick={() => props.onIncreaseItemQuantity(props.id)}>Add stock</button>
        <button onClick={() => props.onDecreaseItemQuantity(props.id)}>Add to cart</button>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onIncreaseItemQuantity: PropTypes.func,
  onDecreaseItemQuantity: PropTypes.func,
  whenItemClicked: PropTypes.func
};

export default Item;