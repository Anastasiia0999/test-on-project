import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
//import { ApiService } from '../../shared/api-service';
import * as actionTypes from './types';
import {ApiService} from "../../shared/api-service";

export const createTest = (test) => ({
    type: actionTypes.CREATE_TEST,
    payload: {
        test,
    },
});

export const fetchTests = (role) => ({
    type: actionTypes.FETCH_TESTS,
    payload:{
        role
    }
});

export const loadTestForPass = (id) => ({
    type: actionTypes.CREATE_TEST,
    payload: {
        id,
    },
});

function* createTestWorker(data) {
    try {
        yield put({ type: actionTypes.CREATING_TEST_STARTED });
        const test = yield call(ApiService.create, '/tests', data.payload.test);
        yield put({ type: actionTypes.CREATING_TEST_SUCCESS, payload: { test } });
        yield put({ type: actionTypes.ADD_TEST, payload: { test } });
        //yield put({ type: actionTypes.CLEAR_LOADED });
    } catch (error) {
        yield put({ type: actionTypes.CREATING_TEST_FAILED, payload: { error } });
        yield put({ type: actionTypes.CLEAR_ERROR });
    }
}

function* fetchTestsWorker(data) {
    try {
        yield put({ type: actionTypes.LOADING_TESTS_STARTED });
        const url = data.payload.role ? '/tests/by-role' : '/tests';
        const testsList = yield call(ApiService.load, url);
        console.log('tests list array', testsList);
        yield put({ type: actionTypes.LOADING_TESTS_SUCCESS, payload: { testsList } });
        yield put({ type: actionTypes.CLEAR_LOADED });
    } catch (error) {
        yield put({ type: actionTypes.LOADING_TESTS_FAILED, payload: { error } });
        yield put({ type: actionTypes.CLEAR_ERROR });
    }
}

function* fetchTestForPassWorker(data) {
    try {
        yield put({ type: actionTypes.LOADING_TEST_FOR_PASS_STARTED });
        const test = yield call(ApiService.load, '/tests/test-being-passed', {testId:data.payload.id});
        yield put({ type: actionTypes.LOADING_TEST_FOR_PASS_FINISHED, payload: { test } });
        yield put({ type: actionTypes.CLEAR_LOADED });
    } catch (error) {
        yield put({ type: actionTypes.LOADING_TEST_FOR_PASS_FAILED, payload: { error } });
        yield put({ type: actionTypes.CLEAR_ERROR });
    }
}

function* createTestWatcher() {
    yield takeEvery(actionTypes.CREATE_TEST, createTestWorker);
}

function* fetchTestsWatcher() {
    yield takeEvery(actionTypes.FETCH_TESTS, fetchTestsWorker);
}

function* fetchTestForPassWatcher() {
    yield takeEvery(actionTypes.GET_TEST_FOR_PASS, fetchTestForPassWorker);
}
export function* testsWatcher() {
    yield all([
        fork(createTestWatcher),
        fork(fetchTestsWatcher),
        fork(fetchTestForPassWatcher)
    ]);
}

