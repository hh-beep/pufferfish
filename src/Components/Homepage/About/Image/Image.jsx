//Base Imports
import React from 'react';

//Style
import ImageStyle from './ImageStyle';

//Logo
import Logo3 from '../../../../Images/Logos/logo3.png'



//Image
export default function Image() {

  const style = ImageStyle()

  return(
    <figure className={ style.Figure }>
      <img alt='Logo Pufferfish' className={ style.Image } src={Logo3} />
    </figure>
  )
}