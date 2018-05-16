import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Header from './Header';
import ContentWrapper from './ContentWrapper';
=======
>>>>>>> c9e8a0f821c32863335b3012788405ba390b682c

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };
<<<<<<< HEAD
  addItem = value => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
=======

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
>>>>>>> c9e8a0f821c32863335b3012788405ba390b682c
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

<<<<<<< HEAD
=======
  inputIsEmpty = () => {
    return this.state.value === '';
  };

>>>>>>> c9e8a0f821c32863335b3012788405ba390b682c
  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
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
=======
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
>>>>>>> c9e8a0f821c32863335b3012788405ba390b682c
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
<<<<<<< HEAD
        */}
=======
>>>>>>> c9e8a0f821c32863335b3012788405ba390b682c
      </div>
    );
  }
}

export default App;
