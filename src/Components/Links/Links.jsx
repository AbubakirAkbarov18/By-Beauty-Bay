import { NavLink } from "react-router-dom"
import './Links.css'

const Links = () => {
  return (
    <section className='links'>
        <div className='links__wrapper'>
            <ul className='links__list'>
                <li> <NavLink to={'/spring-sale'} className={'links__link'}>Spring Sale</NavLink> </li>
                <li> <NavLink to={'/by-beauty-bay'} className={'links__link-blue'}> <span>By BEAUTY BAY</span> </NavLink> </li>
                <li> <NavLink to={'/new-and-trending'} className={'links__link'}>New & Trending</NavLink> </li>
                <li> <NavLink to={'/SPF-and-Tan'} className={'links__link'}>SPF & Tan</NavLink> </li>
                <li> <NavLink to={'/brands'} className={'links__link'}>Brands</NavLink> </li>
                <li> <NavLink to={'/makeup'} className={'links__link'}>Makeup</NavLink> </li>
                <li> <NavLink to={'/skincare'} className={'links__link'}>Skincare</NavLink> </li>
                <li> <NavLink to={'/haircare'} className={'links__link'}>Haircare</NavLink> </li>
                <li> <NavLink to={'/fragrance'} className={'links__link'}>Fragrance</NavLink> </li>
                <li> <NavLink to={'/bath-and-body'} className={'links__link'}>Bath & Body</NavLink> </li>
                <li> <NavLink to={'/wellness'} className={'links__link'}>Wellness</NavLink> </li>
                <li> <NavLink to={'/accessories'} className={'links__link'}>Accessories</NavLink> </li>
                <li> <NavLink to={'/gifting'} className={'links__link'}>Gifting</NavLink> </li>
            </ul>
        </div>
    </section>
  )
}

export default Links