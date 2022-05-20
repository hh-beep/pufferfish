/* React Router Dom */
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

/* Components */
import Homepage from './Components/Homepage/Homepage'
import NewUser from './Components/NewUser/NewUser';
import LoginUser from './Components/Loginuser/LoginUser'



const App = () => {

  

  return (
    <Router>
      <Routes>

        <Route path='/' element={ <Homepage /> } />

        {/* Auth */}
        <Route path='/NewUser' element={ <NewUser /> } />
        <Route path='/LoginUser' element={ <LoginUser /> } />

      </Routes>
    </Router>
  ); 
}

export default App;