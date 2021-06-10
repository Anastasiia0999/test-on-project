import { combineReducers } from 'redux';
import {
    loginReducer, registReducer,
} from './reducers/index.js';

export const accountReducer = combineReducers({
    currentUser: loginReducer,
    registration: registReducer,
});