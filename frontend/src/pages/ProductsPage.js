import React, { Component } from 'react';
import axios from 'axios';

import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {

  componentDidMount() {
    axios('http://dev.backend.xmatl41.vse.handson.pro/api/products')
    .then((response) => {
      this.setState({'response' : response});
    });
  }
  render() {
    if (this.state.data) {
      console.log(this.state.response);
    }

    const products = [
      {
        id: 1,
        title: 'Škoda Superb',
        price: '750 000',
        shortInfo: 'Luxury car produced in the Czech Republic.',
      },
      {
        id: 2,
        title: 'Ford Focus',
        price: '600 000',
        shortInfo: 'Sports car made in USA.',
      },
      {
        id: 3,
        title: 'Moped',
        price: '1 000',
        shortInfo: 'No comment.',
      },
    ]
    return (
      <div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        <ProductList products={products}/>
      </div>
    );
  }
}
