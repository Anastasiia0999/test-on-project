import { all, fork, put, takeEvery } from 'redux-saga/effects';
//import { ApiService } from '../../shared/api-service';
import * as actionTypes from './types';

export const createTest = (test) => ({
    type: actionTypes.CREATE_TEST,
    payload: {
        test,
    },
});

/*export const fetchTests = () => ({
    type: actionTypes.FETCH_TESTS,
});*/

function* createTestWorker(data) {
    try {
        yield put({ type: actionTypes.CREATING_TEST_STARTED });
        //const test = yield call(ApiService.create, '/tests', data.payload.test);
        console.log('I am here');
        //payload: { test }
        const test = data.payload.test;
        yield put({ type: actionTypes.CREATING_TEST_SUCCESS, payload: { test } });
        yield put({ type: actionTypes.ADD_TEST, payload: { test } });
        //yield put({ type: actionTypes.CLEAR_LOADED });
    } catch (error) {
        yield put({ type: actionTypes.CREATING_TEST_FAILED, payload: { error } });
        yield put({ type: actionTypes.CLEAR_ERROR });
    }
}

/*function* fetchTestsWorker() {
    try {
        yield put({ type: actionTypes.LOADING_TESTS_STARTED });
        const testsList = yield call(ApiService.load, '/tests');
        yield put({ type: actionTypes.LOADING_TESTS_SUCCESS, payload: { testsList } });
        yield put({ type: actionTypes.CLEAR_LOADED });
    } catch (error) {
        yield put({ type: actionTypes.LOADING_TESTS_FAILED, payload: { error } });
        yield put({ type: actionTypes.CLEAR_ERROR });
    }
}*/

function* createTestWatcher() {
    yield takeEvery(actionTypes.CREATE_TEST, createTestWorker);
}

function* fetchTestsWatcher() {
    yield takeEvery(actionTypes.FETCH_TESTS, createTestWorker);
}

export function* testsWatcher() {
    yield all([
        fork(createTestWatcher),
        fork(fetchTestsWatcher),
    ]);
}

