import React, { useState } from 'react';

/* Style */
import './formAreaStyle.scss'
import FormAreaStyle from './FormAreaStyle'

/* Components */
import Inputs from './Inputs/Inputs';
import Button from './Button/Button';



export default function FormArea() {

  const style = FormAreaStyle()

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")


  return(
    <form className={ style.Form + ' Form ' }>
      <section className={ style.FormContainer } >
        <Inputs
          email={email}
          setEmail={setEmail}
          pass={pass}
          setPass={setPass}
        />

        <Button 
          email={email} 
          pass={pass} 
        />
      </section>
    </form>
  )
}