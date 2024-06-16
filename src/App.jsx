import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Features from './Pages/Features/Features'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinid' element={<Coin/>}/>
        <Route path='/features' element={<Features/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
