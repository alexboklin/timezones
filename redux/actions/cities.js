import {
    ADD_CITY,
    DELETE_CITY,
    RESTORE_LAST_DELETED_CITY
} from './actionTypes';

// Wrap returned object in parens so it's interpreted as an object expression and not a block of code.
export const addCity = name => ({
    type: ADD_CITY,
    payload: {
        name: name
    }
});

export const deleteCity = id => ({
    type: DELETE_CITY,
    payload: {
        id: id
    }
});

export const restoreLastDeletedCity = city => ({
    type: RESTORE_LAST_DELETED_CITY,
    payload: {
        city: city
    }
});


