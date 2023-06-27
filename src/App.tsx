import './App.css'
// import LandingPage from './components/Landing-Page/LandingPage'
// import Login from './components/LogIn-Page/Login';
// import Signup from './components/Signup-Page/Signup';
import NavRoutes from './components/Navigation/NavRoutes';
import ReactGA from 'react-ga'

ReactGA.initialize("G-SHNQMDW48E")

function App() {
  return (
    <>
      <NavRoutes />
      {/* <LandingPage /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
    </>
  )
}

export default App;
