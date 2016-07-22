// TODO: put into separate file -- e.g., cityReducer will also need them.
export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';

// Wrap returned object in parens so it's interpreted as an object expression and not a block of code.
export const addCity = (text) => ({
    type: ADD_CITY,
    cityName: text
});

export const deleteCity = (id) => ({
    type: DELETE_CITY,
    id: id
});


