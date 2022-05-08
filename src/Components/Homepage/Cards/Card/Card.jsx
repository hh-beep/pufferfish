//Base Import
import React from 'react';

//CardItems
import CardItems from './CardItems';

//Style
import CardStyle from './CardStyle';

//Components
import Info from './Info/Info';
import Svg from './Svg/Svg'


//Card
export default function Card() {

  const cards = CardItems()
  const style = CardStyle()
  
  return(
    <ul className={ style.List }>
      {cards.map( (item, key) => {
        return(
          <li className={ style.Item } key={key}>
            
            <Svg item={ item } />
            <Info item={ item } />

          </li>
        )
      })}
    </ul>
  )
}