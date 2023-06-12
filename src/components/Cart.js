import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../features/cartSlice'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
function Cart() {
    console.log("hello github");
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
    },[cart, dispatch])
    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }
    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
  return (
    <div className='abc bg-danger'>
    <div className='cart-container container'>
        <div className='row'>
        <div className='col'>
        <Header/>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className='cart-empty'>
            <p>Your cart is currently empty</p>
            <div>
                <Link to={`/`}>
                    <span>Start Shopping</span>
                </Link>
            </div>
        </div>
      ) : (
        <div>
            <div className='titles'>
                <h3 className='product-title'>Product</h3>
                <h3 className='price'>Price</h3>
                <h3 className='Quantify'>Quantify</h3>
                <h3 className='total'>Total</h3>
            </div>
            <div className='cart-items'>
                {cart.cartItems?.map(cartItem => (
                    <div className='cart-item' key={cartItem.id}>
                        <div className='cart-product'>
                            <img src={cartItem.img} alt='1'/>
                            <div>
                                <h3>{cartItem.name}</h3>
                                {/* <p>{cartItem.description}</p> */}
                                <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                            </div>
                        </div>
                        <div className='cart-product-price'>{cartItem.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ</div>
                        <div className='cart-product-quantity'>
                            <button onClick={()=> handleDecreaseCart(cartItem)}>-</button>
                            <div className='count'>{cartItem.cartQuantity}</div>
                            <button onClick={()=> handleIncreaseCart(cartItem)}>+</button>
                        </div>
                        <div className='cart-product-total-price'>
                            ${cartItem.price * cartItem.cartQuantity}
                        </div>
                    </div>
                ))}
            </div>
            <div className='cart-summary'>
                <button className='clear-cart' onClick={()=> handleClearCart()}>Clear Cart</button>
                <div className='cart-checkout'>
                    <div className='subtotal'>
                        <span>Tổng giá</span>
                        <span className='amount'>{cart.cartTotalAmount} đ</span>
                    </div>
                    <p>Taxes and</p>
                    <button>Đặt hàng</button>
                    <div className='start-shopping'>
                        <Link to={`/`}>Quay lại</Link>
                    </div>
                </div>
            </div>
        </div>
      )}
      <Footer/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Cart
