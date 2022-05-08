//Base Imports
import React from 'react';

//Style
import AboutStyle from './AboutStyle';

//Components
import Section from './Section/Section';
import Image from './Image/Image';



//About
export default function About() {

  const style = AboutStyle()

  return(
    <section className={ style.About }>
      <section className={ style.AboutContainer }>

        <Image />

        <Section />
        
      </section>
    </section>
  )
}