import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51GssgrEaNli8i19L1J1Y8Z69DLag6XrifhxIzjFbGUCzqBsmGufDmue6q7fwgm9UxITBihUvL8Jnh2HoU4C3ag7v00oKWqgdiW";

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', error);
      alert(
        'There was an issue with your payment. Please ensure that provided card details are correct'
      )
    })
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Zepfferson Clothin Ltd"
      billingAddress=""
      shippingAddress=""
      image="https://images.unsplash.com/photo-1587906697341-bfbde76785c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
