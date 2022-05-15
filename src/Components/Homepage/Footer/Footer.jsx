import React from 'react';

/* Items */
import FooterItems from './FooterItems';

/* Components */
import List from './List/List';

/* Style */
import FooterStyle from './FooterStyle'



export default function Footer() {
  
  const items = FooterItems()
  const style = FooterStyle()
  
  return(
    <footer className=' h-screen flex flex-end flex-col '>
      <section className={ style.Footer }>
      <section className={ style.Container }>
        <h1 
          className={ style.ContainerTittle }
        >Nossas principais redes sociais</h1>
      </section>

      <List 
        items={  items  }
      />
      </section>
    </footer>
  )
}