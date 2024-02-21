import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Routes, Route, Link} from "react-router-dom";
import Blue from './components/navbar'
import Red from './components/navbar'
import Home from './components/home'
import Yellow from './components/navbar'
import Green from './components/navbar'
import Mainsection from './components/mainsection'
import Navbar from './components/navbar'


function App() {

  return (
    <>

     <Mainsection/>
  
     <Navbar/>
    </>
  )
}

export default App
