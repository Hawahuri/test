import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import About from './pages/About'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Layout from './Layout'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    
    <Routes>
          <Route path="/" element={<Layout />}>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts/>}/>
          <Route index element={<Home />} />
           </Route>


        
    </Routes>
    </BrowserRouter>
  )
}
