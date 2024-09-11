import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, onClickingDelete, onDecreaseItemQuantity, onIncreaseItemQuantity } = props;
  let canDecrease = item.quantity > 0 ? true : false; 
  return (
    <React.Fragment>
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <h3>${item.price} - {item.quantity}</h3>
      {(canDecrease)
        ? (
          <button onClick={() => onDecreaseItemQuantity(item.id)}>Add to cart</button>
        ) 
        : (
          <button disabled>Out of Stock</button>
        )
      }
      <button onClick={() => onIncreaseItemQuantity(item.id)}>Add stock</button>
      <hr/>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={() => onClickingDelete(item.id) }>Delete Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default ItemDetail;