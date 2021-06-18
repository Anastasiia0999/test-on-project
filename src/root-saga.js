import { all, fork } from 'redux-saga/effects';

import {
    authWatcher, coursesWatcher,
    testsWatcher
} from './models';
import {watchAddAlert} from "./components/alert-box";


export function* rootSaga() {
    yield all([
        fork(testsWatcher),
        fork(authWatcher),
        fork(coursesWatcher),
        fork(watchAddAlert),
    ]);
}