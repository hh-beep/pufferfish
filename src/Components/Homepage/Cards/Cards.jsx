//Base Imports
import React from 'react';

//Style
import CardsStyle from './CardsStyle';

//Components
import Tittle from './Tittle/Tittle';
import Card from './Card/Card';



//Cards
export default function Cards() {

  const style = CardsStyle()

  return(
    <section className={ style.Container }>
      <section className={ style.Cards }>
        <Tittle />
        <Card />
      </section>
    </section>
  )
}