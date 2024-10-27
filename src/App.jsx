import { useState } from 'react'  
import './App.scss'
import Header from './components/header/Header'
import Announce from './components/announce/Announce'
import Hero from './components/hero/Hero'

function App() {
  return (
    <>
    <Announce/>
    <Header/>
    <Hero/>
    </>
  )
}

export default App
