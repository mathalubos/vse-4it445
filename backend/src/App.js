import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Test extends Component {
  render(){
    return (<div><h1>{this.props.title}</h1><h2>{this.props.code}</h2></div>);
  }
}
class App extends Component {
  render() {
    const code = "TEST2";
    const items = [
      ['some', 'test'],
      ['another', 'test'],
    ];
    return (
      <div className="App">
        {
          items.map(
            ([title, code]) =>
            <Test title={title} code={code}></Test>
          )

        }
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
