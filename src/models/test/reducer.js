import { combineReducers } from 'redux';
import {createTestReducer, testForPassReducer} from './reducers';
import {allTestsReducer} from "./reducers/all-tests-reducer";

export const testsReducer = combineReducers({
    tests: allTestsReducer,
    createTest: createTestReducer,
    testForPass: testForPassReducer
})