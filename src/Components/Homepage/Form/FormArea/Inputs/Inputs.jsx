import React from 'react';

/* Style */
import InputStyle from './InputStyle';
import './InputStyle.scss'


export default function Inputs(props) {

  const style = InputStyle()

  return(
    <section className={ style.Container }>
      <input
        value={props.email}
        className={ style.ContainerInput + " Input " }
        onChange={(e) => { props.setEmail(e.target.value) }} 
        type="email" 
        placeholder='E-mail' 
      />

      <input
        value={props.pass}
        className={ style.ContainerInput + " Input " }
        onChange={(e) => { props.setPass(e.target.value) }}
        type="password"
        placeholder='Senha' 
      />
      
    </section>
  )
}