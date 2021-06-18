import {
    put, call, takeLatest, all, fork, takeEvery,
} from 'redux-saga/effects';

import * as actionTypes from './types.js';
import { ApiService } from '../../shared/api-service';
import {Cookie} from "../../utils/helpers";



export const login = (currentUser) => ({
    type: actionTypes.LOGIN_REQUESTING,
    payload: {
        currentUser,
    },
});

export const registration = (newUser) => ({
    type: actionTypes.REGIST_REQUSTING,
    payload: {
        newUser,
    },
});

export const clearRegistration = () => ({
    type: actionTypes.CLEAR_LOADED,
});

export const logOut = () => ({
    type: actionTypes.LOGOUT,
});


function* loginWorker({ payload }) {
    try {
        yield put({ type: actionTypes.LOGIN_STARTED });
        console.log('LOGIN object', payload.currentUser);
        const logUser = yield call(ApiService.create, '/auth/signin', payload.currentUser);
        console.log('LOGIN RESPONSE', logUser);
        yield call(Cookie.set, 'user', JSON.stringify(logUser), 1);
        yield put({ type: actionTypes.LOGIN_SUCCESS, payload: { logUser } });
    } catch (error) {
        console.log('LOGIN error', error);
       yield put({ type: actionTypes.LOGIN_ERROR, payload: { error } });
    }
}

function* logOutWorker() {
    yield call(Cookie.set, 'user', JSON.stringify({role:-1}), 1);
    yield call(Cookie.del, 'jwt');
    yield put({ type: actionTypes.CLEAR_USER });
}

function* registrationWorker({payload}) {
    try {
        yield put({ type: actionTypes.REGIST_STARTED });
        console.log('REGISTRATION object', payload);
        const regUser = yield call(ApiService.create, '/account', payload.newUser);
        console.log('REG RESPONSE', regUser);
        const user = payload.newUser;
        yield put({ type: actionTypes.REGIST_SUCCESS, payload: { user } });
        // yield put({type: actionTypes.CLEAR_LOADED});
    } catch (error) {
        yield put({ type: actionTypes.REGIST_ERROR, payload: { error } });
    }
}

function* loginWatcher() {
    yield takeLatest(actionTypes.LOGIN_REQUESTING, loginWorker);
}

function* logOutWatcher() {
    yield takeEvery(actionTypes.LOGOUT, logOutWorker);
}

function* registrationWatcher() {
    yield takeLatest(actionTypes.REGIST_REQUSTING, registrationWorker);
}

export function* authWatcher() {
    yield all([
        fork(loginWatcher),
        fork(logOutWatcher),
        fork(registrationWatcher),
    ]);
}
