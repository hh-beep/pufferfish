//Base imports
import { useEffect, useState } from 'react';

//Style
import HeaderStyle from './HeaderStyle.js'

//Components
import Section from './Section/Section'
import Hamburger from './Hamburger/Hamburger'
import Links from './Links/Links'



//Header
export default function Header() {

  const style = HeaderStyle() 
  const [paths, setPaths] = useState([])
  
  const [show, setShow] = useState(false)


  useEffect(() => {
    setPaths([ 
      { tittle: 'Inicio', path: '/Home' },
      { tittle: 'Crie', path: '/Create' },
      { tittle: 'Ideias', path: '/Ideas' },
    ])
  }, [])

  return(
    <section className={ style.Container }>
      <section className={ style.Header }>

        <Section />

        <Hamburger show={show} setShow={setShow} />

        <Links paths={paths} show={show} />

      </section>
    </section>
  )
}