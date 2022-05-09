//Base imports
import React from 'react';

//Components
import Header from "./Header/Header"
import Banner from './Banner/Banner'
import About from './About/About';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer'

//Home
export default function Homepage({  db  }) {
  return(
    <section 
      style={{ overflowX: 'hidden', overflowY: 'hidden' }} 
      className=" Homepage scroll-smooth"
    > 
      
      <Header />

      <Banner />
      <About />
      <Cards />

      {/*<Footer />*/}

    </section>
  )
}