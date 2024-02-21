import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Routes, Route, Link} from "react-router-dom";
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
