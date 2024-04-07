import './Nav.css'
import logo from '../../assets/logo.svg'
import edited from '../../assets/edited.svg'
import tribe from '../../assets/tribe.svg'
import delivery from '../../assets/delivery.svg'
import login from '../../assets/login.svg'
import liked from '../../assets/liked.svg'
import cart from '../../assets/cart.svg'
import { FiSearch } from "react-icons/fi";
import {useNavigate} from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const goToCart = () => {
    navigate('/cart')
  }
  return (
    <section className='nav'>
      <div className='nav__wrapper'>
        <img src={logo} alt="" /> 
        <form className='nav__form'>
          <FiSearch className='search-btn'/>
          <input  className='nav__search-input' type="text" placeholder='search products, brands'/>
        </form>
        <div className='nav__icons'>
              <img width={40} src={edited} alt="" />
              <img width={40} src={tribe} alt="" />
              <img width={30} src={delivery} alt="" />
              <img width={30} src={login} alt="" />
              <img width={30} src={liked} alt="" />
              <img  onClick={goToCart} style={{cursor: 'pointer'}} width={30} src={cart} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Nav