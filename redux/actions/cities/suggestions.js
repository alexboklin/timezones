import {
    REQUEST_CITY_SUGGESTIONS,
    RECEIVE_CITY_SUGGESTIONS
} from '../actionTypes';

import axios from 'axios';

export const fetchCitySuggestions = input => {

    return dispatch => {

        return axios.get(`http://localhost:8888/api/city?name=${input}`)
            .then(response => {
                dispatch(receiveCitySuggestions(response.data));
            })
            .catch(error => {
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

let requestCitySuggestions = input => ({
    type: REQUEST_CITY_SUGGESTIONS,
    payload: {
        input
    }
});

let receiveCitySuggestions = citySuggestions => ({
    type: RECEIVE_CITY_SUGGESTIONS,
    citySuggestions
});