import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.itemList.sort((item1, item2) => item1.price - item2.price).map((item) =>
        <Item
          whenItemClicked={ props.onItemSelection }
          name={item.name}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
          key={item.id}
          onIncreaseItemQuantity={props.onIncreaseItemQuantity}
          onDecreaseItemQuantity={props.onDecreaseItemQuantity}
        />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onIncreaseItemQuantity: PropTypes.func,
  onDecreaseItemQuantity: PropTypes.func
};

export default ItemList;