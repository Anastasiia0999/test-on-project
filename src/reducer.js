import { combineReducers } from 'redux';
import {
    testsReducer,
    questionsReducer,
    accountReducer
} from './models';
import {coursesReducer} from "./models/course";
import {alertReducer} from "./components/alert-box";

export const rootReducer = combineReducers({
    models: combineReducers({
        tests: testsReducer,
        questions: questionsReducer,
        users: accountReducer,
        courses: coursesReducer,
        alerts: alertReducer
    }),
});
