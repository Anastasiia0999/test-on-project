import * as actionTypes from '../types';

const INITIAL_STATE = {
    data: {},
    isLoading: false,
    loaded: false,
    error: '',
};

export const createTestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CREATING_TEST_STARTED:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case actionTypes.CREATING_TEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loaded: true,
                data: action.payload.test,
                error: '',
            };
        case actionTypes.CREATING_TEST_FAILED:
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

