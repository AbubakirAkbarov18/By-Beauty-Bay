import './App.css'
import Head from './Components/Head/Head'
import Links from './Components/Links/Links'
import Nav from './Components/Nav/Nav'
import {Routes, Route} from 'react-router-dom'
import SpringSale from './Routes/SpringSale/SpringSale.jsx'
import ByBeautyBay from './Routes/ByBeautyBay/ByBeautyBay.jsx'
import NewAndTrending from './Routes/New&Trending/NewAndTrending.jsx'
import SpfAndTan from './Routes/SpfAndTan/SpfAndTan.jsx'
import Brands from './Routes/Brands/Brands.jsx'
import MakeUp from './Routes/MakeUp/MakeUp.jsx'
import SkinCare from './Routes/SkinCare/SkinCare.jsx'
import HairCare from './Routes/HairCare/HairCare.jsx'
import Fragrance from './Routes/Fragrance/Fragrance.jsx'
import BathAndBody from './Routes/BathAndBody/BathAndBody.jsx'
import Wellness from './Routes/Wellness/Wellness.jsx'
import Accessories from './Routes/Accessories/Accessories.jsx'
import Gifting from './Routes/Gifting/Gifting.jsx'
import Home from './Routes/Home/Home.jsx'
import FlyingView from './Components/FlyingOffTheShelves/FlyingView/FlyingView.jsx'
import Cart from './Routes/Cart/Cart.jsx'

function App() {

  return (
    
    <main>
      <Head/>
      <Nav/>
      <Links/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/spring-sale' element={<SpringSale/>}/>
          <Route path='/by-beauty-bay' element={<ByBeautyBay/>}/>
          <Route path='/new-and-trending' element={<NewAndTrending/>}/>
          <Route path='/SPF-and-Tan' element={<SpfAndTan/>}/>
          <Route path='/brands' element={<Brands/>}/>
          <Route path='/makeup' element={<MakeUp/>}/>
          <Route path='/skincare' element={<SkinCare/>}/>
          <Route path='/haircare' element={<HairCare/>}/>
          <Route path='/fragrance' element={<Fragrance/>}/>
          <Route path='/bath-and-body' element={<BathAndBody/>}/>
          <Route path='/wellness' element={<Wellness/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path='/gifting' element={<Gifting/>}/>
          <Route path='/product-view/:id' element={<FlyingView/>}/>
      </Routes>
  
    </main>
  )
}

export default App

