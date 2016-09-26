import {
    REQUEST_CITY_SUGGESTIONS,
    RECEIVE_CITY_SUGGESTIONS
} from '../actionTypes';

import axios from 'axios';

export const fetchCitySuggestions = input => {

    return dispatch => {
        // dispatch(requestCitySuggestions(input));

        return axios.get(`http://localhost:8888/api/city?name=${input}`)
            .then(response => {
                console.log("response: ", response.data); //TODO: remove
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

// TODO: will be responsible for the "currentCityInput" slice of the state
let requestCitySuggestions = input => ({
    type: REQUEST_CITY_SUGGESTIONS,
    payload: {
        input
    }
});

let receiveCitySuggestions = data => ({
    type: RECEIVE_CITY_SUGGESTIONS,
    payload: {
        citySuggestions: data
    }
});