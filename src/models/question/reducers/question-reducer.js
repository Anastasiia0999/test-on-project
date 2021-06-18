import * as actionTypes from '../types';

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    loaded: false,
    error: '',
};

export const questionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CREATE_QUESTION:
            const addData = [...state.data];
            addData.push(action.payload.question)
            console.log('reducer', addData);
            return {
                isLoading: false,
                loaded: true,
                data: addData,
                error: '',
            };
        case actionTypes.REMOVE_QUESTION:
            const removeData = [...state.data].filter(q => q.id !== action.payload.id);
            return {
                isLoading: false,
                loaded: true,
                data: removeData,
                error: '',
            };
        case actionTypes.EDIT_QUESTION:
            const dataNew = [...state.data].map(q => {
                if(q.id === action.payload.data.id){
                    return action.payload.data
                }
                return q;
            });
            console.log('edit data', action.payload.data);
            return {
                isLoading: false,
                loaded: true,
                data: dataNew,
                error: '',
            };
        case actionTypes.CLEAR_QUESTIONS:
            return {
                data: [],
                isLoading: false,
                loaded: false,
                error: '',
            }
        default: return state;
    }
}

