import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

class ListCard extends Component {

  listItems = () => (
    this.props.items.map((item, index) => {
      let name = ''
      let i  
      for (i = 0; i < 10; i++) {
        name.concat(item.name[i])
      }
      return <li key={index}>{name}</li>
    }))

    
  

  render() {
    return (

      <Base>
      <div>
        <h1>{this.props.header}</h1>
          {this.listItems()}
        
      </div>
      </Base>
    );
  }
}

ListCard.propTypes = {
  /**
   * PropTypes go here.
   */
};

ListCard.defaultProps = {
  header: "List",
  items: [{name: 'abcdefghijklmnop'}]
};

export default ListCard;
