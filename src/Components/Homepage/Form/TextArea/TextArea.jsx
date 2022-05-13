import React from 'react';

/* Image */
import Logo1 from "../../../../Images/Logos/logo1.png"

/* Style */
import TextAreaStyle from './TextAreaStyle';


export default function TextArea() {

  const style = TextAreaStyle()

  return(
    <section  className={ style.Section }>

      <section className={ style.Container }>
        <h1 className={ style.ContainerText }>Comece a criar agora mesmo suas ideias</h1>
      </section>

      <figure className={ style.Figure }>
        <img src={Logo1} className={ style.Figureimage } />
      </figure>
      
    </section>
  )
}