import { combineReducers } from 'redux';
import {questionReducer} from './reducers';

export const questionsReducer = combineReducers({
    createQuestion: questionReducer
})