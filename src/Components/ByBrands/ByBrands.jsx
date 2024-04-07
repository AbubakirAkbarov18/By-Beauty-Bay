import { Link } from 'react-router-dom'
import './ByBrands.css'

const ByBrands = () => {
  return (
    <section className='by-brands'>
      <div className="by-brands__wrapper">
        <h2 className='by-brands__title'>shop by brand</h2>
        <div className='by-brands__scroll'>
            <Link className='by-brands__scroll-card'>
              <img src="https://images.ctfassets.net/eoaaqxyywn6o/6i336sZ2TOseIYGXoA5znL/c510c196cea2b8ce229459518ba135f4/Site_Category_Carousel-_BY_BB_LOGO.png" alt="" />
              <h3>by beauty bay</h3>
            </Link>
            <Link className='by-brands__scroll-card'>
              <img src="https://images.ctfassets.net/eoaaqxyywn6o/2B0oVqyaEJk6dLiHZZsl8C/12304e4d0b2dfdce0544570f23c5dd95/Site_Category_Carousel-_THE_INKEY_LIST.png" alt="" />
              <h3>bthe inkey list</h3>
            </Link>
            <Link className='by-brands__scroll-card'>
              <img src="https://images.ctfassets.net/eoaaqxyywn6o/3xYV7sjYnzW5gTiRD0Cvvb/2f63afcc201053216db62851b38b973a/Site_Category_Carousel-_SOL_DE_JANERO.png" alt="" />
              <h3>sol de janeiro</h3>
            </Link>
            <Link className='by-brands__scroll-card'>
              <img src="https://images.ctfassets.net/eoaaqxyywn6o/6onVot0ouB96m9qCJS330x/a7def5e4030faf6e135970fe6f7328b5/Site_Category_Carousel-_MADE_BY_MITCHELL.png" alt="" />
              <h3>made by mitchell</h3>
            </Link>
            <Link className='by-brands__scroll-card'>
              <img src="https://images.ctfassets.net/eoaaqxyywn6o/1qViK64G3N0mCHsXCsbWE4/8dcb7b15f25e4741fe68e0863a9f4f4c/Site_Category_Carousel-_URBAN_DECAY.png" alt="" />
              <h3>burban decay</h3>
            </Link>
            <Link className='by-brands__scroll-card'>
              <img src="https://images.ctfassets.net/eoaaqxyywn6o/7Dsf493NZfYuFydIwpg9el/65fa100caa3d8a1da363d1d2f83e5ed6/Site_Category_Carousel-_MAC.png" alt="" />
              <h3>mac cosmetics</h3>
            </Link>
            <Link className='by-brands__scroll-card'>
              <img src="https://images.ctfassets.net/eoaaqxyywn6o/3jEOWsbeqU6Y0r9FHufg2h/1a488c2b96297e4cf83feacc4d7fcc43/Site_Category_Carousel-_LANEIGE.png" alt="" />
              <h3>laneige</h3>
            </Link>
        </div>
      </div>
    </section>
  )
}

export default ByBrands