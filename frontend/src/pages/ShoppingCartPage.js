import React, { Component } from 'react';
import lodash from 'lodash';
import { connect } from 'react-redux';
import { shoppingCartClearAction } from '../actions';
import { removeProductAction } from '../actions';

export class ShoppingCartPageRaw extends Component {
  render() {
    const {
      shoppingCart,
      shoppingCartClearAction,
      removeProductAction,
    } = this.props;
    return (
      <div>
        <div className="jumbotron">
          <h1>Shopping Cart</h1>
        </div>
        <button
                onClick={() => shoppingCartClearAction()}
                type="button"
                className="btn btn-success">
          Clear
        </button>
        {lodash.values(shoppingCart).map(({ product, count }) => (
          <div key={product.id}>
            <h3>{count} x {product.title}</h3>
            <button
                    onClick={() => removeProductAction(product.id)}
                    type="button"
                    className="btn btn-danger">
              Remove product
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { shoppingCart } = state;

  return {
    shoppingCart,
  };
}

export const ShoppingCartPage = connect(
  mapStateToProps,
  {
    shoppingCartClearAction,
    removeProductAction
  }
)(ShoppingCartPageRaw);
