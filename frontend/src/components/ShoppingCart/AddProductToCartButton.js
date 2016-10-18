import React, { Component } from 'react';
import { connect } from 'react-redux';

import { shoppingCartAddProductAction } from '../../actions';

export class AddProductToCartButton extends Component {
  render() {
    const {
      product,
      shoppingCartAddProductAction,
    } = this.props;
    return (
      <button
        onClick={() => shoppingCartAddProductAction(product)}
        type="button"
        className="btn btn-success"
      >
        <span
          className="glyphicon glyphicon-shopping-cart"
          aria-hidden="true">
        </span> Add to cart
      </button>
    );
  }
}

export const AddProductToCartButtonContainer = connect(
  () => ({}),
  { shoppingCartAddProductAction },
)(AddProductToCartButton);
