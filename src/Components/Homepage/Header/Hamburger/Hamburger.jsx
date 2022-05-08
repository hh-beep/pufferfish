//Base imports
import React from 'react';

//Style
import HamburgerStyle from './HamburgerStyle';
import './Hamburger.scss'


export default function Hamburger({ show, setShow }) {

  const style = HamburgerStyle()

  function changeShow() {
    setShow(!show)
  }

  return(
    <button 
      type="button" 
      className={ style.Button + " Button " + ( show ? " ButtonClick " : "  " ) } 
      onClick={() => changeShow()}
    >
      <div className={ style.Buttons + " Button-1 "}></div>
      <div className={ style.Buttons + " Button-2 "}></div>
      <div className={ style.Buttons + " Button-3 "}></div>
    </button>
  )
}