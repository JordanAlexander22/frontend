import { combineReducers } from 'redux';
import { registerReducer } from "./instructorRegister";
import { loginReducer } from "./instructorLogin";
import { homeReducer } from './instructorHome';

export default combineReducers({
    registerReducer,
    loginReducer,
    homeReducer,
});
