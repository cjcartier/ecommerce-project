import React from 'react';

import CustomButton from '../custom-button/custom-button.compontent';

import './cart.styles.scss';

const CartDropdown = () => (
	<div className='cart-dropdown'>
		<div className='cart-items' />
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;
