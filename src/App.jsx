import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
function App() {
  let password=123
  let userName="Felix"
  return (
    <>
    {/* <Router> */}
      {/* <Navbar/>
      <Search />
      <Routes>
      
      <Route path='/' element={password===123 && userName==="Felix" ? <Dashboard/> : <Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Footer/>
      </Routes> */}
    {/* </Router> */}
    
    <Router>
      <Navbar/>
      <Search/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
