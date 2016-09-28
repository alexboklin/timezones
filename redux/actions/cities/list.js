import {
    ADD_CITY,
    DELETE_CITY,
    RESTORE_LAST_DELETED_CITY
} from '../actionTypes';

import axios from 'axios';

// Wrap returned object in parens so it's interpreted as an object expression and not a block of code.
export const addCity = (cityAccentName, country) => ({
    type: ADD_CITY,
    payload: {
        nameAndCountry: `${cityAccentName}, ${country}`
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

                    // TODO: create an action creator for this part as well
                    // https://developers.google.com/maps/documentation/timezone/intro
                    axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${city.latitude},${city.longitude}
                    &timestamp=${timestamp}&key=${apiKey}`).
                        then(response => {
                            console.log('Got response from Google API: ', response.data);
                            dispatch(getCountry(city.accentName, city.countryCode));
                    })
                }
            );

            // TODO: catch possible errors
    }
};

const getCountry = (cityAccentName, countryCode) => {
    return dispatch => {
        return axios({
            method: 'get',
            url: `https://restcountries-v1.p.mashape.com/alpha/${countryCode}`,
            headers: {
                'X-Mashape-Key': 'WP786F8XUpmshWPmL2YCGOsZscP3p1IpQCejsnhOY7enr5btTe',
                'Accept': 'application/json'
            }
        })
        // TODO: add progress bar
            .then(response => {
                console.log('Got response from Mashape: ', response.data);
                let country = response.data['name'];
                console.log('country: ', country);
                dispatch(addCity(cityAccentName, country));
            })
    };

  //   curl --get --include 'https://restcountries-v1.p.mashape.com/alpha/af' \
  // -H 'X-Mashape-Key: WP786F8XUpmshWPmL2YCGOsZscP3p1IpQCejsnhOY7enr5btTe' \
  // -H 'Accept: application/json'


    // {
    //     url: 'http://country.io/names.json',
    //         headers: {
    //     'Access-Control-Allow-Origin': '*'
    // }
    // }
};