import React from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div className="Payment_Main_all_layout">
        <div className="Payment-top">
  </div> 
  <div className="Payment-all">
    <div className="Payment-Heading">
        <h1>Payment Method</h1>
    </div>
</div>
<div className="payment-gateway-body">
    <div className="payment-gateway-left">
        <div> <span><input type="radio"/></span> <img src="https://content1.geekbuying.com/V1.4/en/images/cartImg/paypal.jpg?v=20220111" alt=""/><p>The safer,easier way to pay</p></div>
        <div> <span><input type="radio"/></span><img src="https://content1.geekbuying.com/V1.4/en/images/cartImg/PaypalPayLater.jpg?v=20220111" alt=""/><p>Pay by Paypal Paylater</p></div>
        <div> <span><input type="radio"/></span><img src="https://content1.geekbuying.com/V1.4/en/images/cartImg/visa-min.jpg?v=20220111" alt=""/><p>Pay by credit/debit card directly.</p></div>
        <div> <span><input type="radio"/></span> <img src="https://content1.geekbuying.com/V1.4/en/images/cartImg/Adyen_Klarna.jpg?v=20220111" alt=""/><p>Pay in 3 installments of interest-free with klarna</p></div>
        <div> <span><input type="radio"/></span><img src="https://content1.geekbuying.com/V1.4/en/images/cartImg/Adyen_Klarna.jpg?v=20220111" alt=""/><p>Pay later with Klarna</p></div>
    </div>
<div className="payment-gateway-right">
    <div className="payment-gateway-right-body">
        <div className="payment-gateway-order-no">
            <div>Order No.:</div>
            <div>5598330</div>
        </div>
        <div className="payment-gateway-grand-total">
            <div>Grand Total:</div>
            <div className="total"></div>
        </div>
        <hr></hr>
        <div className="payment-gateway-payable-amount">
            <div>Payable Amount:</div>
            <div className="total2"></div>
        </div>
        <Link to="/thanks"><div className="payemnt-gateway-pay"><button >Pay</button></div></Link>
    </div>
</div>
</div>
    </div>
  )
}

export default Payment