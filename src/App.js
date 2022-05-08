/* React Router Dom */
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

/* Components */
import Homepage from './Components/Homepage/Homepage'

/* Firebase Database */
import { getDatabase, ref, onValue } from 'firebase/database'

/* React Hooks */
import { useState, useEffect } from 'react'



export default function App() {

  const [db, setDB] = useState([])

  const refDB = ref(getDatabase(), 'Users/')
  useEffect( () => {
    onValue(refDB, snap => {
      const array = Object.values( snap.val() )
      setDB(array)
    })
  }, [])


  return (
    <Router>
      <Routes>

        <Route path='/Home' element={ <Homepage /> } />

      </Routes>
    </Router>
  ); 
}

