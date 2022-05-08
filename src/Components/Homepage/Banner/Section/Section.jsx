//Base Imports
import React from 'react';

//Style
import SectionStyle from './SectionStyle';



//Section
export default function Section() {

  const style = SectionStyle()
  
  return(
    <section className={ style.Section }>

      <h2 className={ style.SectionTittle }>Criamos suas Ideias</h2>
      <p className={ style.SectionText }>A pufferfish trabalha fazendo serigrafia e nossos principais produtos são  moletons e camisetas</p>

    </section>
  )
}