import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.itemList.map((item, index) =>
        <Item
          name={item.name}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
          key={index}
          onIncreaseItemQuantity={props.onIncreaseItemQuantity}
        />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onIncreaseItemQuantity: PropTypes.func,
};

export default ItemList;