import React, { Fragment } from 'react';
import CreateNewElement from './CreateNewElement';

const ContentWrapper = (props) => (
  <Fragment>
  	<h2>Shopping List</h2>
  	<CreateNewElement
      addItem={props.addItem}
  	  deleteLastItem={props.deleteLastItem}
  	  noItemsFound={props.noItemsFound}
      items={props.items}
  	/>
  </Fragment>
);

export default ContentWrapper;