import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AccountSetup from './components/Authentication/AccountSetup'
import LandingPage from './screens/LandingPage'
import Login from "./screens/Login";
import Signup from './screens/Signup'
import NotfoundPage from './screens/NotfoundPage'
import ComingSoon from './screens/ComingSoon'
import UserDasboard from './screens/UserDasboard'
import ProtectedRoutes from './components/Authentication/ProtectedRoutes'
import GenerateInvoice from './components/Dashboard/pages/GenerateInvoice'
import Settings from './components/Dashboard/pages/Settings'
import ForgotPassword from './components/Authentication/ForgotPassword'
import PDFTemplate from './components/Dashboard/PDFTemplate'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<LandingPage />} />
      {/* <Route path='/' element={<ComingSoon />} /> */}



      <Route path='/login'>
        <Route index element={<Login />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
      </Route>

      <Route path='signup' >
        <Route index element={<Signup />} />
        <Route path='accountsetup' element={<AccountSetup />} />
      </Route>

      <Route path='/dashboard' element={<UserDasboard />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="generateinvoice" element={<GenerateInvoice />} />
        <Route path='generateinvoice/template' element={<PDFTemplate />} />
        <Route path="myinvoice" element={<h1>My Invoices</h1>} />
        <Route path="setting" element={<Settings />} />
      </Route>


      {/* TODO: Configure Protected Routes */}
      <Route element={<ProtectedRoutes />}>
      </Route>

      <Route path='*' element={<NotfoundPage />} />
    </Routes>
  </BrowserRouter>,
)
