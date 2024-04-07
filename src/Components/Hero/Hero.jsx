import './Hero.css'
import {useNavigate} from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  const NavigateToShop = () => {
    navigate('/spring-sale')
  }
  return (
    <section className='hero'>
        <div className='hero__wrapper'>
            <div className='hero__message'>
                <h1 className='hero__title'>OUR SPRING SALE IS ENDING...</h1>
                <p className='hero__text'>Bag your beauty essentials for less, while you still can!</p>
                <button onClick={NavigateToShop} className='hero__btn'>Shop Now</button>
            </div>
        </div>
    </section>
  )
}

export default Hero

//