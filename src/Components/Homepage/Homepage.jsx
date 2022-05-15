//Base imports
import React, { useState } from 'react';

//Components
import Header from "./Header/Header"
import Banner from './Banner/Banner'
import About from './About/About';
import Cards from './Cards/Cards';
import Form from './Form/Form'
import Footer from './Footer/Footer'

//Home
export default function Homepage({  db  }) {
  
  const [canShow, setCanShow] = useState(false)

  return(
    <section 
      style={{ 
        overflowX: 'hidden', 
        overflowY: 'hidden',
        backgroundColor: '#222326'
      }} 
      className=" Homepage scroll-smooth"
    > 
      
      <Header />

      <Banner />
      <About />
      <Cards />

      <Form 
        canShow={canShow}
        setCanShow={setCanShow} 
      />

      <Footer />

    </section>
  )
}