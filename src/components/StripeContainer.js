import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

console.log("env", process.env.REACT_APP_PUBLIC_KEY)
const stripeTestPromsie = loadStripe(process.env.REACT_APP_PUBLIC_KEY || process.env.PUBLIC_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromsie}>
      <PaymentForm />
    </Elements>
  )
}

export default StripeContainer;