import {
    ADD_CITY,
    DELETE_CITY,
    RESTORE_LAST_DELETED_CITY,
    FETCH_CITY_SUGGESTIONS
} from './actionTypes';

import axios from 'axios';

// Wrap returned object in parens so it's interpreted as an object expression and not a block of code.
export const addCity = name => ({
    type: ADD_CITY,
    payload: {
        name
    }
});

export const deleteCity = id => ({
    type: DELETE_CITY,
    payload: {
        id
    }
});

export const restoreLastDeletedCity = city => ({
    type: RESTORE_LAST_DELETED_CITY,
    payload: {
        city
    }
});

export const fetchCitySuggestions = input => {

    return dispatch => {
        // dispatch(requestCitySuggestions(input));

        return axios.get(`http://localhost:8888/api/city?name=${input}`)
            .then(function (response) {
                console.log("response: ", response.data); // TODO dispatch receiveCitySuggestions
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made, but the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });


    }

};


// TODO: leave these two private, no
// requestCitySuggestions = input => ({
//     type: REQUEST_CITY_SUGGESTIONS,
//     payload: {
//         input
//     }
// });
//
// receiveCitySuggestions = data => ({
//     type: RECEIVE_CITY_SUGGESTIONS,
//     payload: {
//         citySuggestions:
//     }
// });