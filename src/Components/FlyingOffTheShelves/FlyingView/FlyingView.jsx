import { useEffect, useState } from 'react'
import '../FlyingOffTheShelves.css'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import { RxInfoCircled } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import { addToCart } from '../../../REDUX/AddToCartSlice';

const FlyingView = () => {
    const {id} = useParams()
    const [singleProduct, setSingleProduct] = useState(null)
    const dispatch = useDispatch()

  useEffect(() => {
    axios(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
    .then(response => setSingleProduct(response.data))
  }, [])

  console.log(singleProduct);

  const handleAddToBag = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <section className='FlyingView'>
      <div className="flying-view__wrapper">
        {
          singleProduct &&
          <div className='flying-view__top'>
            <div className='flying-view__left-side'><img src={singleProduct.image_link} alt="" /></div>
            <div className='flying-view__right-side'>
            <div className='flying-view__right-side-texts'>
              <h3 className='flying-view__right-side-title'>{singleProduct.name}</h3>
              <h2 className='flying-view__right-side-text'>{singleProduct.description}</h2>
              <p className="flying-view__right-side-weight">100g</p>
            </div>
            <h2 className="flying-view__right-side-price">${singleProduct.price}</h2>
              <div className='flying-view__right-side-offers-wrapper'>
                <div className='flying-view__right-side-offers-single'>
                    <div className='offer'>
                        <p className='offer__text'>offer</p>
                    </div>
                    <Link className='offer__link' to={'https://apps.apple.com/gb/app/beauty-bay/id1319809419'}>App Exclusive: Download the app to get up to 20% off* your haul</Link>
                </div>
                <div className='flying-view__right-side-offers-single-second'>
                    <div className='offer'>
                        <p className='offer__text'>offer</p>
                    </div>
                    <Link className='offer__link' to={'https://apps.apple.com/gb/app/beauty-bay/id1319809419'}>Get 10% off selected items when you spend £50 with code: YAY10 *Exclusions apply</Link>
                </div>
            </div>
            <div className='flying-view__right-side-free-delivery'>
                <p>Free delivery available</p>
                <RxInfoCircled className='flying-view__right-side-free-delivery-icon'/>
            </div>
            <div className="flying-view__right-side-actions">
              <button onClick={() => handleAddToBag(singleProduct)} className='flying-view__right-side-actions-cart'>Add to bag</button>
              <button className='flying-view__right-side-actions-heart'> <FaRegHeart/> </button>
            </div>
          </div>
          </div>
        }
      </div>
    </section>
  )
}

export default FlyingView