import {
    ADD_CITY,
    DELETE_CITY,
    RESTORE_LAST_DELETED_CITY
} from '../actionTypes';

import axios from 'axios';

// Wrap returned object in parens so it's interpreted as an object expression and not a block of code.
export const addCity = city => ({
    type: ADD_CITY,
    payload: {
        city
    }
});

export const deleteCity = place => ({
    type: DELETE_CITY,
    payload: {
        place
    }
});

export const restoreLastDeletedCity = city => ({
    type: RESTORE_LAST_DELETED_CITY,
    payload: {
        city
    }
});

export const addLocationAndItsLocalTime = id => {

    // See: http://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
    let timestamp = Math.floor(Date.now() / 1000);
    const apiKey = 'AIzaSyCvwQxLACrb-Dr70mBIKH7DhLIMOgJXUX8';

    // TODO: can we use all here?
    return dispatch => {
        getCityById(id)
        .then(
            response => {
                // console.log("Got city by id: ", response.data);

                // TODO: create a City model and parseJson method for it
                let city = response.data;

                getTimezone(city, timestamp, apiKey)
                .then(
                    response => {
                        // console.log('Got response from Google Maps API: ', response.data);
                        city.timeZoneId = response.data.timeZoneId;
                        city.timeZoneName = response.data.timeZoneName;
                        dispatch(addCity(city));
                })
            }
        );
        // TODO: catch possible errors
    }
};

const getCityById = id => {
    return axios.get(`http://localhost:8888/api/city/${id}`)
};

const getTimezone = (city, timestamp, apiKey) => {
    // https://developers.google.com/maps/documentation/timezone/intro
    return axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${city.latitude},${city.longitude}
                    &timestamp=${timestamp}&key=${apiKey}`)
};