import merchSiteReducer from "../../reducers/merch-site-reducer";

describe("merchSiteReducer", () => {

  const currentState = {
    1: {
      name: "test1",
      description: "description1 test1",
      price: 1,
      quantity: 1,
      id: 1
    }, 2: {
      name: "test2",
      description: "description2 test2",
      price: 2,
      quantity: 2,
      id: 2
    }
  }

  let action;
  const itemData = {
    name: "test",
    description: "description test",
    price: 15,
    quantity: 15,
    id: 1
  };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(merchSiteReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new item data to mainItemList", () => {
    const { name, description, price, quantity, id } = itemData;
    action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      id: id
    };

    expect(merchSiteReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });

  test("Should successfully delete an item", () => {
    action = {
      type: "DELETE_ITEM",
      id: 1
    };
    expect(merchSiteReducer(currentState, action)).toEqual({
      2: {
        name: "test2",
        description: "description2 test2",
        price: 2,
        quantity: 2,
        id: 2
      }
    });
  });

  test("Should successfully increase item quantity by 1", () => {
    action = {
      type: "INCREMENT_ITEM_QUANTITY",
      id: 1
    };
    expect(merchSiteReducer(currentState, action)).toEqual({
      1: {
        name: "test1",
        description: "description1 test1",
        price: 1,
        quantity: 2,
        id: 1
      }, 2: {
        name: "test2",
        description: "description2 test2",
        price: 2,
        quantity: 2,
        id: 2
      }
    });
  });
});