import * as actionTypes from './types';

export const createQuestion = (question) => ({
    type: actionTypes.CREATE_QUESTION,
    payload: {
        question,
    },
});

export const editQuestion = (data) => ({
    type: actionTypes.EDIT_QUESTION,
    payload: {
        data,
    },
});


export const removeQuestion = (id) => ({
    type: actionTypes.REMOVE_QUESTION,
    payload: {
        id,
    },
});


export const clearQuestions = () => ({
    type: actionTypes.CLEAR_QUESTIONS,
});