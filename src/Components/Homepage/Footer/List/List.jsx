import React from 'react';

import ListStyle from './ListStyle';




export default function List({  items  }) {
  
  const style = ListStyle()

  return(
    <ul className={ style.List }>
      {items.map( item => {
        return(
          <a className={ style.ListItem } href={ item.url } >
            <img className={ style.ListItemImage } src={item.image} />
          </a>
        )
      })}
    </ul>
  )
}