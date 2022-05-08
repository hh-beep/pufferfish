//Base Imports
import React from 'react';

//Logo
import Logo1 from '../../../../Images/Logos/logo1.png'

//Style
import ImageStyle from './ImageStyle';



//Image
export default function Image() {

  const style = ImageStyle() 

  return(
    <figure className={ style.Figure }>
      <img alt='Logo Pufferfish' className={ style.Image } src={Logo1} />
    </figure>
  )
}