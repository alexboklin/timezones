import {
    ADD_CITY,
    DELETE_CITY,
    RESTORE_LAST_DELETED_CITY
} from '../actionTypes';

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

export const fetchCityAndItsTime = id => {

    // See: http://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
    let timestamp = Math.floor(Date.now() / 1000);
    const apiKey = 'AIzaSyCvwQxLACrb-Dr70mBIKH7DhLIMOgJXUX8';

    return dispatch => {
        return axios.get(`http://localhost:8888/api/city/${id}`)
            .then(
                response => {
                    console.log("Got city by id: ", response.data);
                    let city = response.data;

                    // https://developers.google.com/maps/documentation/timezone/intro
                    axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${city.latitude},${city.longitude}
                    &timestamp=${timestamp}&key=${apiKey}`).
                        then(response => {
                            console.log('Got response from Google API: ', response.data);
                            dispatch(addCity(city.name));
                    })
                }
            );

            // TODO: catch possible errors
    }
};