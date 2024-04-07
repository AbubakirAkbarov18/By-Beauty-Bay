import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './SpringSale.css'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import { addToCart } from '../../REDUX/AddToCartSlice';

const SpringSale = () => {
  const [products, setProducts] = useState([])
  let randomNumber = Math.floor(Math.random() * 200)
  let discount = Math.floor(Math.random() * 60)
  const dispatch = useDispatch()

  useEffect(() => {
    axios('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then(response => setProducts(response.data.slice(0, 40)))
  }, [])

  const handleAddToCart = (item) => {
    dispatch(addToCart({item}))
  }

  console.log(products);

  return (
    <div className='spring-sale'>
    <div className="spring-sale__wrapper">
        <h2 className='spring-sale__title'>spring sale</h2>
      <div className='spring-sale__cards'>
          {
            products &&
            products.map(item => (
              <div key={item.id} className='spring-sale__card'>
                  <div  onClick={() => handleSingleProduct(item)} className='spring-sale__card-top'>
                  <img src={item.image_link} alt="" />
                  <p className='card__shock'><strong>OMG! </strong> {randomNumber}+ sold in the last 24 hours</p>
                  <h3 className='card__title'>{item.name}</h3>
                  <p className='card__description'>{item.description}</p>
                  <div className='cards__stars'>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStarHalf/>
                      <p>{randomNumber}</p>
                  </div>
                  </div>
                  <div  onClick={() => handleSingleProduct(item)} className="spring-sale__card-price">
                      <p className='card__price'>${item.price}0</p>
                      <p>%{discount}</p>
                  </div>
                  <button onClick={() => {handleAddToCart(item)}} className='spring-sale__card-btn'>Add to bag</button>
                  <FaRegHeart className='card__heart'/>
              </div>
            ))
          }
      </div>
    </div>
  </div>
  )
}

export default SpringSale