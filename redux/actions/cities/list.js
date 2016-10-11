import {
    ADD_CITY,
    TOGGLE_ADDING_CITY_FLAG,
    UNTOGGLE_ADDING_CITY_FLAG,
    DELETE_CITY_BY_ITS_PLACE,
    RESTORE_DELETED_CITY,
    CACHE_DELETED_CITY,
    CLEAR_CACHED_DELETED_CITY,

} from '../actionTypes';

import {
    showNotification,
    changeNotificationText,
    hideNotification
} from './notification';

import axios from 'axios';

// Wrap returned object in parens so it's interpreted as an object expression and not as a block of code.
export const addCity = city => ({
    type: ADD_CITY,
    city
});

const toggleAddingCityFlag = () => ({
    type : TOGGLE_ADDING_CITY_FLAG
});

// export const addCityAndToggleAddingCityFlag = city => {
//     return (dispatch, getState) => {
//         dispatch(addCity(city));
//         dispatch(toggleAddingCityFlag());
//     }
// };

const unToggleAddingCityFlag = () => ({
    type : UNTOGGLE_ADDING_CITY_FLAG
});

export const deleteCityByItsPlace = placeInList => ({
    type: DELETE_CITY_BY_ITS_PLACE,
    placeInList
});

const cacheDeletedCity = city => ({
    type: CACHE_DELETED_CITY,
    city
});

const clearCachedDeletedCity = () => ({
    type: CLEAR_CACHED_DELETED_CITY
});

export const clearCachedDeletedCityAndHideNotification = () => {
    return (dispatch, getState) => {
        dispatch(hideNotification());
        dispatch(clearCachedDeletedCity());
        dispatch(unToggleAddingCityFlag());
    }
};

export const deleteAndCacheCityAndNotify = city => {
    return (dispatch, getState) => {
        console.log('DELETING...');

        dispatch(deleteCityByItsPlace(city.placeInList));
        dispatch(cacheDeletedCity(city));

        let deletedCity = getState().deletedCity;
        let notification = `${deletedCity.accentName}, ${deletedCity.country} removed from the list`;
        // console.log('notification: ', notification);

        dispatch(changeNotificationText(notification));

        dispatch(showNotification());

        dispatch(unToggleAddingCityFlag());

    }
};

export const restoreCity = city => ({
    type: RESTORE_DELETED_CITY,
    city
});

export const restoreDeletedCityAndNotify = () => {
    // TODO: when undoing adding a city, getState().deletedCity is null!

    return (dispatch, getState) => {
        console.log('RESTORING ', getState().deletedCity);


        dispatch(restoreCity(getState().deletedCity));
        dispatch(unToggleAddingCityFlag());
    }
};

export const addCityToListAndNotify = id => {
    // See: http://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
    let timestamp = Math.floor(Date.now() / 1000);
    const apiKey = 'AIzaSyCvwQxLACrb-Dr70mBIKH7DhLIMOgJXUX8';

    // TODO: can we use all here?
    return (dispatch, getState) => {
        if (getState().cityList.find(city => city.id == id) !== undefined) {
            // TODO: dispatch a popup?
            return;
        }

        dispatch(toggleAddingCityFlag());

        getCityById(id)
        .then(
            response => {
                console.log("Got city by id: ", response.data);

                // TODO: create a City model and parseJson method for it
                let city = response.data;

                getTimezone(city, timestamp, apiKey)
                .then(
                    response => {
                        // console.log('Got response from Google Maps API: ', response.data);
                        city.timeZoneId = response.data.timeZoneId;
                        city.timeZoneName = response.data.timeZoneName;
                        dispatch(addCity(city));

                        let notification = `${city.accentName}, ${city.country} added to the list`;
                        // let notification = `${deletedCity.accentName}, ${deletedCity.country} removed from the list`;
                        console.log('notification: ', notification);

                        dispatch(changeNotificationText(notification));

                        dispatch(showNotification());
                })
            }
        )
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

const getCityById = id => {
    return axios.get(`http://localhost:8888/api/city/${id}`)
};

const getTimezone = (city, timestamp, apiKey) => {
    // https://developers.google.com/maps/documentation/timezone/intro
    return axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${city.latitude},${city.longitude}
                    &timestamp=${timestamp}&key=${apiKey}`)
};