import './Footer.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { RiArrowRightFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer>
        <div className="footer__wrapper">
           <div className='footer-top'>
           <div className='footer__right-side'>
                <img width={450} height={56} src={logo} alt="" />
            </div>
            <div className='footer__left-side'>
                <ul className='footer__first-list'>
                    <li className='first-list__li-head'>Help & information</li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Delivery & returns</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>FAQ's</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Haul Pass</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Gift Cards</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>About Us</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Careers</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Affiliates</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Student discount</Link> </li>
                </ul>
                <ul className='footer__first-list'>
                    <li className='first-list__li-head'>Legal</li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Terms & Conditions</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>TRIBE Terms</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Website Terms Of Use</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Privacy</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Anti-Slavery</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Cookies</Link> </li>
                    <li className='first-list__li-text'> <Link className='li-text__link'>Manage Preferences</Link> </li>
                </ul>
                <div className='footer__more-about-us'>
                    <h3 className='more-about-us__title'>WANT MORE FROM BEAUTY BAY?</h3>
                    <p className='more-about-us__text'>Let’s stay in touch! We promise to send you the latest news, offers, and the freshest beauty drops, straight to your inbox.</p>
                    <form className='more-about-us__form'>
                        <input required className='more-about-us__form-input' type="text" placeholder='Your email'/>
                        <button className='more-about-us__form-arrow'><RiArrowRightFill/></button>
                    </form>
                    <div className='social-media'>
                        <FaFacebook className='social-media__icon'/>
                        <BsInstagram className='social-media__icon'/>
                        <FaSquareXTwitter className='social-media__icon'/>
                        <FaTiktok className='social-media__icon'/>
                        <FaPinterest className='social-media__icon'/>
                        <FaYoutube style={{fontSize: '40px'}} className='social-media__icon'/>
                    </div>
                </div>
            </div>
           </div>
           <div className='footer-bottom'>
                <div className="footer__copyright">
                    <p className='footer__copyright-text'>Copyright © 2022 BEAUTY BAY Ltd.</p>
                    <p className='footer__copyright-text'>Registered office address Level 12, 5 Exchange Quay, M5 3EF. Registered in England, company registration number 6427672.</p>
                </div>
                <div className='footer__payment-option'>
                    <div className='payment-option-icon'>
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/6rDEb4sJOBkiIga3rkaSfA/b705c283f12f64d22365f9d168d2e9be/PayPal.svg" alt="" />
                    </div>
                    <div className='payment-option-icon'>
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/y8QrCXyaUnAPeqGSkYBXT/dcd21c778833eed8062c9707784ea812/Klarna.svg" alt="" />
                    </div>
                    <div className='payment-option-icon'>
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/2fVeO7f2x78KlbQuhqmuVb/a195d07a55c2bb8e1f595d5b541d4d79/Clearpay.svg" alt="" />
                    </div>
                    <div className='payment-option-icon'>
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/10YPF40EuGghbMiM8dvfZ4/604c660dfd975959ded92967d5acdd68/Apple.svg" alt="" />
                    </div>
                    <div className='payment-option-icon'>
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/4QTzSyV3E2jIfll4u3GgIW/46acc6659798376dc8bb416454f2baba/Visa.svg" alt="" />
                    </div>
                    <div className='payment-option-icon'>
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/1R0NBLVCShxTQNVHNjanE4/c970e9e15ecbb026929000ae3fcce6ae/Amex.svg" alt="" />
                    </div>
                    <div className='payment-option-icon'>
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/5bs4r6UiioP3Fkj4Qg35o8/5583c0ecc4b6500a1083fd38cfabf6dc/Mastercard.svg" alt="" />
                    </div>
                    <div className='payment-option-icon'>
                        <img src="https://images.ctfassets.net/eoaaqxyywn6o/5IdXqCmgjNCVwZNyssRsdE/702c37ee931258aad2071e063bbd337e/Maestro.svg" alt="" />
                    </div>
                </div>
           </div>
        </div>
    </footer>
  )
}

export default Footer