import {
    CACHE_DELETED_CITY,
} from '../../actions/actionTypes';

let deletedCity = (deletedCity = null, action) => {
    switch (action.type) {

        case CACHE_DELETED_CITY:
            console.log('CACHE_DELETED_CITY: ', action.city);
            return action.city;

        default:
            return deletedCity;
    }
};

export default deletedCity;