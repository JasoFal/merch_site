import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  let canDecrease = props.quantity > 0 ? true : false; 
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
        <h3>{props.quantity}</h3>
      </div>
      {(canDecrease)
        ? (
          <button onClick={() => props.onDecreaseItemQuantity(props.id)}>Add to cart</button>
        ) 
        : (
          <button disabled>Out of Stock</button>
        )
      }
      <button onClick={() => props.onIncreaseItemQuantity(props.id)}>Add stock</button>
      <hr />
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