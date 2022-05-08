//Base Import
import React from 'react';

//Style
import TittleStyle from './TittleStyle';



export default function Tittle() {

  const style = TittleStyle()

  return (
    <section className={ style.Section }>

      <h2 className={ style.SectionTittle }>Por que escolher a Pufferfish?</h2>

    </section>
  )
} 