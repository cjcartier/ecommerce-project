import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IQn6PHLWT31FZGg0f5BCKx6F3G4jSPWpU71XKZ4V82RX3XRerwXrydQsyQETYPzRg7Njc7dhgGX7xcgDoWFzhNI00JEyKkBvo';
	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Adventurebear Co'
			billingAddress
			shippingAddress
			// image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
