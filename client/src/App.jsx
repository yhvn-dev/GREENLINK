import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/home.jsx"
import About from "./pages/About/about.jsx"



import './styles.css'

function App() {

  return(

      <>
        <BrowserRouter>

          <Routes>
            
            {/* Homepage */}
              <Route path='/' element={<Home></Home>}/>

              <Route path='/about' element={<About></About>}/>

            {/* Other Pages */}
          </Routes>

        </BrowserRouter>

      
      </>

  )

}

export default App
