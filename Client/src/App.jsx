import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>



    </Routes>
    
    </BrowserRouter>
  )
}
