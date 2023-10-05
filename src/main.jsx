import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import './index.css'
import {  BrowserRouter, Route,Routes } from 'react-router-dom'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/our-services' element={<Services />} />
        <Route path='/reach-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
