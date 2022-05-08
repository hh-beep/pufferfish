//Base Import
import React from 'react';

//Style
import SectionStyle from './SectionStyle';



//Section
export default function Section() {

  const style = SectionStyle()

  return(
    <section className={ style.Section }>


      <h2 className={ style.SectionTittle }>Sobre Nós</h2>

      <p className={ style.SectionText }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae sed quasi tempora quidem illum eos consequatur aspernatur quam mollitia, magni libero delectus dolorem culpa molestias sequi repellat deleniti! Debitis!</p>   


    </section>
  )
}