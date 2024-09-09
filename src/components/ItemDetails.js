import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <h3>{item.price} - {item.quantity}</h3>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;