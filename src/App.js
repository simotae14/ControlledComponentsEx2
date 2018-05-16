import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ContentWrapper from './ContentWrapper';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };
  addItem = value => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
       	<Header logo={logo} />
       	<ContentWrapper
         addItem={this.addItem}
         value={this.state.value}
       	 handleChange={this.handleChange}
         inputIsEmpty={this.inputIsEmpty}
         deleteLastItem={this.deleteLastItem}
         noItemsFound={this.noItemsFound}
         items={this.state.items}
       />
       {/*
        <h2>Shopping List</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
        */}
      </div>
    );
  }
}

export default App;
