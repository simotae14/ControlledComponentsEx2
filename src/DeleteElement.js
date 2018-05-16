import React, { Fragment } from 'react';

const DeleteElement = (props) => {
	return (
      	<Fragment>
  		  <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
            Delete Last Item
          </button>
          <p className="items">Items</p>
          <ol className="item-list">
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
          </ol>
        </Fragment>
      )
}


export default DeleteElement;