import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'



export default function App() {
  return (
    
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/Dashboard">Dashboard</Link>
      </nav>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>

  </BrowserRouter>
  )
};



