import React from 'react';

/* Components */
import FormArea from './FormArea/FormArea';
import TextArea from './TextArea/TextArea'

/* Style */
import FormStyle from './FormStyle';



export default function Form({ canShow, setCanShow }) { 

  const style = FormStyle()

  return(
    <section className={ style.Container }>
      <section className={ style.Section }>

      <TextArea />

      <FormArea 
        canShow={canShow}
        setCanShow={setCanShow} 
      />

      </section>
    </section>
  )
}