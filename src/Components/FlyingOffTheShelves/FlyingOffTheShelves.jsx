import { useEffect, useState } from 'react'
import axios from 'axios'
import './FlyingOffTheShelves.css'
import { FaRegHeart } from "react-icons/fa6";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const FlyingOffTheShelves = () => {
    const [flyingProduct1, setFlyingProduct1] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=blush')
        .then(response => setFlyingProduct1(response.data.slice(3, 13)))
    }, [])

    console.log(flyingProduct1);

    const handleSingleProduct = (item) => {
        navigate(`/product-view/${item.id}`)
    }
  return (
    <section className='flying'>
        <div className='flying__wrapper'>
            <h2 className="flying__title">FLYING OFF THE SHELVES</h2>
            <div className="flying__cards">
                    {
                        flyingProduct1 &&
                        flyingProduct1.map(item => (
                                <div className='flying__card' key={item.id}>
                                <img  onClick={() => handleSingleProduct(item)} src={item.image_link} alt="" />
                                <div  onClick={() => handleSingleProduct(item)} className='flying__card-texts'>
                                    <h4 className='flying__card-title'>{item.name}</h4>
                                    <p className='flying__card-paragraph'>{item.description}</p>
                                </div>
                                <div  onClick={() => handleSingleProduct(item)} className='flying__card-stars'>
                                    <FaStar className='flying__card-star'/>
                                    <FaStar className='flying__card-star'/>
                                    <FaStar className='flying__card-star'/>
                                    <FaStarHalf className='flying__card-star'/>
                                </div>
                                <div  onClick={() => handleSingleProduct(item)} className='flying__card-price'>
                                    <p>${item.price}</p>
                                </div>
                                <div className='flying__card-actions'>
                                    <button className='flying__card-actions-btn-heart'> <FaRegHeart/> </button>
                                    <button className='flying__card-actions-btn-cart'> <LiaCartPlusSolid/> </button>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    </section>
  )
}

export default FlyingOffTheShelves