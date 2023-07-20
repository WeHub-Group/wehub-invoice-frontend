import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './screens/Home'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    }
  </BrowserRouter>,
)
