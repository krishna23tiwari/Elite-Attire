import React from 'react'
import ScrollToTop from './Validation/ScrollToTop'
import Homepage from './Pages/Homepage'
import TopRatedDetails from './Pages/TopRatedDetails'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import KidsWearDetails from './Pages/KidsWearDetails'
import MensWearDetails from './Pages/MensWearDetails'
import TrendigProductsDetails from './Pages/TrendigProductsDetails'

const App = () => {
  return (
    <BrowserRouter >
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='TopRate' element={<TopRatedDetails/>} />
        <Route path='kidsWear' element={<KidsWearDetails/>} />
        <Route path='menswear' element={<MensWearDetails/>} />
        <Route path='trendingproducts' element={<TrendigProductsDetails/>} />        

      </Routes>
    </BrowserRouter>
     
   
  )
}

export default App
