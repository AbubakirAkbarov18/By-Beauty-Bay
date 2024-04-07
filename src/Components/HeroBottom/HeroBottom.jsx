import { Link } from 'react-router-dom'
import './HeroBottom.css'
import { IoMdArrowDropright } from "react-icons/io";

const HeroBottom = () => {
  return (
    <section className='hero-bottom'>
        <div className='hero-bottom__wrapper'>
            <Link to={'/spring-sale'} style={{textDecoration: 'none', color: '#000'}}>
            <div className='hero-bottom__card'>
                <img src="https://images.ctfassets.net/eoaaqxyywn6o/4FUZGa67ZaOqtjhXPiR1vj/33847addd23900e454228b210ef09b98/Trading_Trio-UK.jpeg" alt="" />
                <h3 className='hero-bottom__card-title'>minimal effort, maximum glow</h3>
                <p className='hero-bottom__card-text'>prepare for radiant results with the By BEAUTY BAY Liquid Highlighters</p>
                <Link className='hero-bottom__link'>Shop Now <IoMdArrowDropright className='arrow'/></Link>
            </div>
            </Link>
            <Link  to={'/spring-sale'} style={{textDecoration: 'none', color: '#000'}}>
            <div className='hero-bottom__card'>
                <img src="https://images.ctfassets.net/eoaaqxyywn6o/1MT6RjAqNOxjX0mPzbgyZD/d0de538a559b3d66fd59c5a417105298/Trading_Trio.jpeg" alt="" />
                <h3 className='hero-bottom__card-title'>me-time musts</h3>
                <p className='hero-bottom__card-text'>make time to unwind with these new bodycare essentials</p>
                <Link to={'/spring-sale'} className='hero-bottom__link'>Shop Now <IoMdArrowDropright className='arrow'/></Link>
            </div>
            </Link>
            <Link  to={'/spring-sale'} style={{textDecoration: 'none', color: '#000'}}>
            <div className='hero-bottom__card'>
                <img src="https://images.ctfassets.net/eoaaqxyywn6o/1vjJPtV6aolqvDAYy7ljja/95e815be8ecfe54742b04bf26cd8aaae/Trading_Trio_Full_Face.jpg" alt="" />
                <h3 className='hero-bottom__card-title'>tiktok trending and totally worth it</h3>
                <p className='hero-bottom__card-text'>it's time to haul FYP faves</p>
                <Link to={'/spring-sale'} className='hero-bottom__link'>Shop Now <IoMdArrowDropright className='arrow'/></Link>
            </div>
            </Link>
        </div>
    </section>
  )
}

export default HeroBottom