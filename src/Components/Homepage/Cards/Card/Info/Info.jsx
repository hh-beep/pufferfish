//Base Imports
import React from 'react';

//Style
import InfoStyle from './InfoStyle';



//Section
export default function Info({ item }) {

  const style = InfoStyle()

  return(
    <section className={ style.Info }>
      <h2 className={ style.InfoTittle }>{ item.tittle }</h2>
      <p className={ style.InfoText }>{ item.text }</p>
    </section>
  )
}