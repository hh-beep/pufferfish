import React, { useState } from 'react';

import CreateUser from '../../Auth/CreateUser';

/* Style */
import ButtonStyle from './ButtonStyle';
import './ButtonStyle.scss'



export default function Button(props) {

  const style = ButtonStyle()

  const [erro, setErro] = useState('')


  
  return(
    <section className={ style.Container}>

      <div className={ style.ErrorArea }>
        <h1 className={ style.ErrorText }>{erro}</h1>
      </div>

      <button
        className={ style.Button + " FormButton " }
        onClick={(e) => {
          
          CreateUser( e, props.email, props.pass, setErro)
        }}>Cadastrar</button>
    </section>
  )
}