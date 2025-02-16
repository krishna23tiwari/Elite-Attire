import React from 'react'
import Navbar from '../Components/FirstPage/Navbar'
import Banner from '../Components/FirstPage/Banner'
import Hero from '../Components/FirstPage/Hero'
import HeroSecond from '../Components/FirstPage/HeroSecond'
import NewStyle from '../Components/FirstPage/NewStyle'
import NewProduct from '../Components/FirstPage/NewProduct'
import NewCollection from '../Components/FirstPage/NewCollection'
import Footer from '../Components/FirstPage/Footer'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <HeroSecond />
      <NewStyle />
      <NewProduct />
      <NewCollection/>
      <Footer />
    </>
  )
}

export default Homepage
