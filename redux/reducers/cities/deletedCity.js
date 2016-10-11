import {
    CACHE_DELETED_CITY,
    CLEAR_CACHED_DELETED_CITY
} from '../../actions/actionTypes';

let deletedCity = (deletedCity = null, action) => {
    switch (action.type) {

        case CACHE_DELETED_CITY:
            console.log('CACHE_DELETED_CITY: ', action.city);
            return action.city;

        case CLEAR_CACHED_DELETED_CITY:
            return deletedCity;

        default:
            return deletedCity;
    }
};

export default deletedCity;