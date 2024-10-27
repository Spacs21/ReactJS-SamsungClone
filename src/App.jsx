import { useState } from 'react'  
import './App.scss'
import Header from './components/header/Header'
import Announce from './components/announce/Announce'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'

function App() {
  return (
    <>
    <Announce/>
    <Header/>
    <Hero/>
    <Products
      title={"Mobile & Computing"}
      items={["Galaxy S24 Ultra", "Galaxy Z Fold6", "Galaxy Z Flip6", "Galaxy Tab S10 Series", "Galaxy Watch Ultra"]}
      model="Galaxy S24 Ultra"
      descp="Get up to $750 trade-in or up to $275 off without. Plus, double the storage on us."
      image="https://rewardmobile.co.uk/wp-content/uploads/2024/01/Samsung-S24-Ultra-Titanium-Grey-2.png"
    />
    </>
  )
}

export default App
