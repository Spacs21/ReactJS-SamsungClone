import { useState } from 'react'  
import './App.scss'
import Header from './components/header/Header'
import Announce from './components/announce/Announce'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import Banner from './components/banner/Banner'
import tv from "./assets/model.jpg"
import kitchen from "./assets/kitchen.png"

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
      customClass="products"
    />
    <Banner/>
    <Products
      title={"TV & Audio"}
      items={["Neo QLED 8K QN900D", " OLED S95D 77", " Q990D soundbar",]}
      model="Let's make this super clear"
      descp="Save $2,200 on an 85 Class Samsung Neo QLED 8K QN900D and get our best picture in a huge range of contrast and color with Neo Quantum HDR 8K Pro."
      image={tv}
      customClass="products new-class"
    />
    <Products
      title={"Home Appliances"}
      items={["NEarly Black Friday", "Refrigerators", "Bespoke Laundry", "Cooking Power Pair"]}
      model="Get the best deals of the season"
      descp="Make the holidays brighter with early Black Friday deals on Bespoke appliances and save $1,700."
      image={kitchen}
      customClass="products new-color"
    />
    </>
  )
}

export default App
