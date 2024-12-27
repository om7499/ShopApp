import { useState } from 'react'
import Navbar from './components/Navbar'

import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
    {/* it will ensure is only one route that matches the path is rendere in ui */}
      <Routes>  
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/ContactUs' element={<ContactUs/>} />
          <Route path='/Product' element={<Product/>} />
          {/* <Route path='*' element={<PageNotFound/>} /> */}

        </Routes>  
        <Footer/>
    </>
  )
}

export default App
