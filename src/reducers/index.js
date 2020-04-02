import { combineReducers } from 'redux';
import promoCodeReducer from './promoCoderReducer';

export default combineReducers({
    promoCode: promoCodeReducer
});