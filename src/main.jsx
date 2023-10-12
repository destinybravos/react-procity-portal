import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import {  BrowserRouter, Route,Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import BaseLayout from './layouts/BaseLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import ForgotPassword from './pages/auth/ForgotPassword.jsx'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Create Parent Route with BaseLayout for all guest pages */}
        <Route element={<BaseLayout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/our-services' element={<Services />} />
          <Route path='/reach-us' element={<Contact />} />
        </Route>

        {/* Create Parent Route with AuthLayout for all auth pages */}
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Route>

        {/* Create Parent Route with AdminLayout for all admin pages */}
        <Route element={<AdminLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
)
