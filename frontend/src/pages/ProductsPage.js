import React, { Component } from 'react';
import axios from 'axios';

import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor(props){
    super(props);
    this.state = {'data':[]};
  }

  componentDidMount() {
    axios('http://dev.backend.xmatl41.vse.handson.pro/api/products')
    .then((response) => {
      this.setState(response);
    });
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        <ProductList products={this.state.data}/>
      </div>
    );
  }
}
