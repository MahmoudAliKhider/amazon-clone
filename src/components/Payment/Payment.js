import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './../../context/GlobalState';
import CheckoutProduct from '../CheckOut/CheckoutProduct'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../context/AppReducer';
import './Payment.css';
import { CardElement } from '@stripe/react-stripe-js';

const Payment = () => {
    const { basket, user } = useAuth();

    const handleChange = () => {

    }

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>
                    Checkout (<Link to="/checkout">{basket.length} items</Link>)
                </h1>
            </div>

            <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                    <p>{user?.email}</p>
                    <p>Minofia, Egypt</p>
                </div>
            </div>

            <div className="payment-section">
                <div className="payment-title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment-items'>
                    {
                        basket.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }

                </div>
            </div>

            {/* // payment */}

            <div className="payment-section">
                <h3>Payment Method</h3>
                <div className="payment-details">
                    <form>
                        <CardElement onChange={handleChange} />
                        <div className="payment-details">
                            <CurrencyFormat
                                renderText={(value) =>
                                    <h3>Order Total : {value}</h3>
                                }
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button type="submit">
                                <span> Buy Now</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Payment