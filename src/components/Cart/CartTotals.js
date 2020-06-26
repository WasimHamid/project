import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PayPalButton from './PayPalButton'
import StripeCheckout from 'react-stripe-checkout'

export default function CartTotals({ value, history }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value
    // eslint-disable-next-line
    const [product, setProduct] = useState({
        name: "Playermade store",
        // price: 48,
        productBy: "playermade"
    });

    const makePayment = token => {
        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`https://playermade-store.herokuapp.com/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log("RESPONSE", response)
            const { status } = response;
            console.log("STATUS", status)
        })
            .catch(error => console.log(error))
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text capitalize text-right">
                        <Link to='/'>
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type='button' onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :<span>
                                    <strong>£{cartSubTotal}</strong>
                                </span>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax :<span>
                                    <strong>£{cartTax}</strong>
                                </span>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total :<span>
                                    <strong>£{cartTotal}</strong>
                                </span>
                            </span>
                        </h5>
                        <br />
                        <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                        <br />
                        <StripeCheckout
                            stripeKey="pk_test_51GxCClIrZ1H4aOKzjntxPGIRNKBN2zIbpsI0u9IfHIFHWviyj5ffooi1Q5BYXxSvcKeZa2faqjWKxRjc3OEuWYVA00C9AZ9nuc"
                            clearCart={clearCart}
                            history={history}
                            token={makePayment}
                            name="Playermade store"
                            amount={cartTotal * 100}
                            shippingAddress
                            billingAddress
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}
