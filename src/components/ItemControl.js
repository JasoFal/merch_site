import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetail from "./ItemDetails";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleIncrementItemQuantity = (id) => {
    const findItem = this.state.mainItemList.filter(item => item.id === id)[0];
    const updatedItem = {...findItem, quantity: findItem.quantity += 1};
    const newListOfItems = this.state.mainItemList.filter(item => item.id !== id);
    const updatedListOfItems = newListOfItems.concat(updatedItem);
    this.setState({
      mainItemList: updatedListOfItems,
      formVisibleOnPage: false
    });
  }

  handleDecrementItemQuantity = (id) => {
    const findItem = this.state.mainItemList.filter(item => item.id === id)[0];
    const updatedItem = {...findItem, quantity: findItem.quantity -= 1};
    const newListOfItems = this.state.mainItemList.filter(item => item.id !== id);
    const updatedListOfItems = newListOfItems.concat(updatedItem);
    this.setState({
      mainItemList: updatedListOfItems,
      formVisibleOnPage: false
    });
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedItem != null) { 
      currentlyVisibleState = <ItemDetail 
        item={this.state.selectedItem}
      />
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList 
        itemList={this.state.mainItemList} 
        onItemSelection={this.handleChangingSelectedItem}
        onIncreaseItemQuantity={this.handleIncrementItemQuantity} 
        onDecreaseItemQuantity={this.handleDecrementItemQuantity}
      />;
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

export default ItemControl;