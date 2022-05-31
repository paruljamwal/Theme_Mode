import { useState } from 'react'
import './App.css';
import { ThemeContext } from './context/Themecontext';
import { Navbar } from './components/Navbar'
import {useContext} from 'react'
import { Body } from './components/body';
function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className="App" 
    style={{
      backgroundColor:theme==="dark" ? "pink" : "skyblue",
      height: "100vh",
    }}>
       <Navbar></Navbar>
       <Body></Body>
    </div>
  )
}

export default App
