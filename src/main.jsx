import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AccountSetup from './screens/AccountSetup'
import LandingPage from './screens/LandingPage'
import Login from "./screens/Login";
import Signup from './screens/Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<LandingPage/>} />
      
      <Route path='/auth'>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='accountsetup' element={<AccountSetup />} />
      </Route>

    </Routes>

  </BrowserRouter>,
)
