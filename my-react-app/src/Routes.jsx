import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import About from './pages/About'
import Contacts from './pages/Contacts'
import Home from './pages/Home'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/' element={<Home/>}/>

        
    </Routes>
    </BrowserRouter>
  )
}
