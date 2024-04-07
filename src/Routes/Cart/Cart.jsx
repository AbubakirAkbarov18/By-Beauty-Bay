import { useState } from 'react'
import './Cart.css'
import {useSelector} from 'react-redux'

const Cart = () => {
    const data = useSelector(state => state.Combiner.cart.cart)

console.log(data);
  return (
    <section className='cart'>
        <div className='cart__wrapper'>
            <h2 className='cart__title'>your bag</h2>
            <div className="cart__cards">
                {
                    data && 
                    data.filter(item => item.id !== item.id).map(item => (
                        <div>
                            hello
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Cart