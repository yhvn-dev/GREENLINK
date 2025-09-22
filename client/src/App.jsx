import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/login.jsx"
import Contact from "./pages/Contacts/contacts.jsx"
import Home from "./pages/Home/home.jsx"
import About from "./pages/About/about.jsx"
import Dashboard from './pages/Dashboard/dashboard.jsx';
import { ProtectedRoute } from './../routes/ProtectedRoutes/page.Routes.jsx';

import './styles.css'

function App() {

  return(

      <>
        <BrowserRouter>

          <Routes>
            
              <Route path='/' element={<Home/>}/>
              <Route path='/contacts' element={<Contact/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/dashboard' 
              
              element={<ProtectedRoute> 
                  
                  <Dashboard/> 
              
              </ProtectedRoute>}/>



            {/* Other Pages */}
          </Routes>

        </BrowserRouter>

      </>

  )

}

export default App
