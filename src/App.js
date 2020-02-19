import React, { Component } from 'react';
import { Button } from './components';
import ListCard from './components/list-card/ListCard.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <div className="component-list">
          <Button href="#" theme='go'> Button </Button>
          <ListCard header="new header"/>
        </div>
      </div>
    );
  }
}

export default App;
