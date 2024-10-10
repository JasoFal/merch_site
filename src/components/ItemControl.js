import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetail from "./ItemDetails";
import EditItemForm from "./EditItemForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, price, quantity } = itemToEdit;
    const action = {
      type: "ADD_ITEM",
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  }

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_ITEM",
      id: id
    }
    dispatch(action);
    this.setState({selectedItem: null});
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.mainItemList[id];
    this.setState({selectedItem: selectedItem});
  }

  // handleIncrementItemQuantity = (id) => {
  //   const { dispatch } = this.props;
  //   const action = {
  //     type: "INCREMENT_ITEM_QUANTITY",
  //     id: id
  //   }
  //   dispatch(action);
  //   this.setState({
  //     formVisibleOnPage: false
  //   });
  // }

  handleDecrementItemQuantity = (id) => {
    if (this.state.selectedItem === null) {
      this.setState({
        formVisibleOnPage: false
      });
    } else {
      this.setState({
        formVisibleOnPage: false,
      });
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const { dispatch } = this.props;
    const { id, name, description, price, quantity } = newItem;
    const action = {
      type: "ADD_ITEM",
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm 
        item = {this.state.selectedItem} 
        onEditItem = {this.handleEditingItemInList}
      />
      buttonText = "Return to Item List"
    } else if (this.state.selectedItem != null) { 
      currentlyVisibleState = <ItemDetail 
        item={this.state.selectedItem}
        onClickingEdit={this.handleEditClick}
        onClickingDelete = {this.handleDeletingItem}
        onIncreaseItemQuantity={this.handleIncrementItemQuantity} 
        onDecreaseItemQuantity={this.handleDecrementItemQuantity}
      />
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList 
        itemList={this.props.mainItemList} 
        onItemSelection={this.handleChangingSelectedItem}
        onIncreaseItemQuantity={this.handleIncrementItemQuantity} 
        onDecreaseItemQuantity={this.handleDecrementItemQuantity}
      />
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  };
}

ItemControl.propTypes = {
  mapStateToProps: PropTypes.object
}

const mapStateToProps = state => {
  return {
    mainItemList: state
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;