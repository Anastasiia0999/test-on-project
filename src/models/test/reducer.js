import { combineReducers } from 'redux';
import { createTestReducer } from './reducers';
import {allTestsReducer} from "./reducers/all-tests-reducer";

export const testsReducer = combineReducers({
    tests: allTestsReducer,
    createTest: createTestReducer
})