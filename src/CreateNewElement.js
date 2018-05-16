import React, { Fragment, Component } from 'react';
import DeleteElement from './DeleteElement';

class CreateNewElement extends Component {
    state = {
      value: '',
    };
	addItem = (event) => {
      event.preventDefault();
      this.props.addItem(this.state.value);
    };
    handleChange = event => {
      this.setState({ value: event.target.value });
    };
    inputIsEmpty = () => {
      return this.state.value === '';
    };
	render() {
      return (
      	<Fragment>
  		  <form onSubmit={this.addItem}>
      	    <input
        	  type="text"
        	  placeholder="Enter New Item"
       		  value={this.state.value}
        	  onChange={this.handleChange}
      	  />
      	   <button disabled={this.inputIsEmpty()}>Add</button>
         </form>
      	<DeleteElement 
      		deleteLastItem={this.props.deleteLastItem}
			noItemsFound={this.props.noItemsFound}
			items={this.props.items}
        />
      </Fragment>
      )
    }
}

export default CreateNewElement;