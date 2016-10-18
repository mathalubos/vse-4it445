
export const DUMMY_ACTION = 'DUMMY_ACTION';
export const SHOPPING_CART_ADD_PRODUCT = 'SHOPPING_CART_ADD_PRODUCT';
export const SHOPPING_CART_CLEAR = 'SHOPPING_CART_CLEAR';
export const REMOVE_PRODUCT_ACTION = 'REMOVE_PRODUCT_ACTION';

export const shoppingCartAddProductAction = product => {
  return {
    type: SHOPPING_CART_ADD_PRODUCT,
    product,
  };
};

export const shoppingCartClearAction = () => {
  return {
    type: SHOPPING_CART_CLEAR,
  };
};

export const dummyAction = data => {
  return {
    type: DUMMY_ACTION,
    data,
  };
};
export const removeProductAction = productId => {
  return {
    type: REMOVE_PRODUCT_ACTION,
    productId,
  };
};
