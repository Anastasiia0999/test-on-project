import * as actionTypes from '../types.js';

const INITIAL_STATE = {
    data: {},
    isLoading: false,
    loaded: false,
    error: '',
};

export const testForPassReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADING_TEST_FOR_PASS_STARTED:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case actionTypes.LOADING_TEST_FOR_PASS_FINISHED:
            return {
                ...state,
                isLoading: false,
                loaded: true,
                data: action.payload.test,
                error: '',
            };
        case actionTypes.LOADING_TEST_FOR_PASS_FAILED:
            return {
                ...state,
                isLoading: false,
                loaded: false,
                error: action.payload.error,
            };
        case actionTypes.CLEAR_LOADED:
            return {
                ...state,
                loaded: false
            }
        case actionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: '',
            };
        default: return state;
    }
}