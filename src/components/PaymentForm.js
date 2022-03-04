import React, {useState} from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (!error) {
      try {
        const {id} = paymentMethod
        const response = await axios.post('http://localhost:4000/payment', {
          amount: 1000,
          id
        })
        if (response.data.success) {
          console.log('Payment Successful');
          setSuccess(true);
        }
      }
      catch (error) {
        console.log('Error', error);
      }
    } else {
      console.log('err', error.message);
    }
  }

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="form-group">
            <div className="firstRow">
              <CardElement />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>you bought spatula</h2>
        </div>
      )}
    </>
  )

}

export default PaymentForm;