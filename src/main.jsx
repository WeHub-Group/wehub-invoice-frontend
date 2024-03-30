import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './screens/Landing'
import Signup from './screens/Signup'
import Login from './screens/Login'
import AccountSetup from './screens/AccountSetup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

      <Route path='/accountsetup' element={<AccountSetup />} />
    </Routes>

  </BrowserRouter>,
)
