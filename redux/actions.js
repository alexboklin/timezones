import { ADD_CITY, DELETE_CITY } from './actionTypes';

// Wrap returned object in parens so it's interpreted as an object expression and not a block of code.
export const addCity = (text) => ({
    type: ADD_CITY,
    payload: {
        name: text
    }
});

export const deleteCity = (id) => ({
    type: DELETE_CITY,
    payload: {
        id: id
    }
});


