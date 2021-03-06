import * as actionTypes from '../types.js';

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    loaded: false,
    error: '',
};

export const allTestsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADING_TESTS_STARTED:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case actionTypes.LOADING_TESTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loaded: true,
                data: action.payload.testsList,
                error: '',
            };
        case actionTypes.LOADING_TESTS_FAILED:
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