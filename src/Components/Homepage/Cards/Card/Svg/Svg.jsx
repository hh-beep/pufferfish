//Base Import
import React from 'react';

//Style
import SvgStyle from './SvgStyle';



//Svg
export default function Svg({ item }) {

  const style = SvgStyle()

  return(
    <figure className={ style.Svg } >
      <img className={ style.SvgImage } alt="Icones" src={ item.logo } />
    </figure>
  )
}