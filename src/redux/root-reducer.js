import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cat.reducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer,
});
