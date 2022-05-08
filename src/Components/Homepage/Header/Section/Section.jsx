//Base Imports
import React from 'react';

//Style
import SectionStyle from './SectionStyle';



//Section
export default function Section() {

  const style = SectionStyle()
  
  return(
    <section className={ style.headerSection }>
      <h2 className={ style.HeaderSectionTittle }>PufferFish</h2>
    </section>
  )
}