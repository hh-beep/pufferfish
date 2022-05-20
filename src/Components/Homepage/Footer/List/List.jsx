import React from 'react';

import ListStyle from './ListStyle';

import "./List.scss"



export default function List({  items  }) {
  
  const style = ListStyle()

  return(
    <ul className={ style.List }>
      {items.map( (item, key) => {
        return(
          <a 
	          onClick={ () => { window.open(item.url, "blank") }}
            className={ style.ListItem + " Footer__Item " } 
            key={key}
          >
            <img className={ style.ListItemImage + " Footer__Item-Image " } src={item.image} />
          </a>
        )
      })}
    </ul>
  )
}
