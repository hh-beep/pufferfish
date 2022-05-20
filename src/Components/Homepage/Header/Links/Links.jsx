//Base Imports
import React, { useState } from 'react';

//Routes
import { Link } from 'react-router-dom'; 

//Style
import LinkStyle from './LinkStyle';
import "./Links.scss"



//Links
export default function Links({ paths, show }) {

  const style = LinkStyle()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  window.addEventListener('resize',() => setWindowWidth(window.innerWidth))

  return(
  <ul className={ style.List + ( windowWidth < 768 ? (show ? " ListBig " : " ListHidde ") : "  " ) }>
    {paths.map( ( item, key ) => {
      return(
        <Link 
          key={ key }
          className={ style.Item + " Item " }
          to={ item.path }
        >
          { item.tittle }
        </Link>
      )
    })}
  </ul>
  )
}