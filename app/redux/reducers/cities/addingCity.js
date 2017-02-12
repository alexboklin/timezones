import {
    TOGGLE_ADDING_CITY_FLAG,
    UNTOGGLE_ADDING_CITY_FLAG
} from '../../actions/actionTypes';

let hasJustAddedCity = (hasJustAddedCity = false, action) => {
    switch (action.type) {

        case TOGGLE_ADDING_CITY_FLAG:
            return true;

        case UNTOGGLE_ADDING_CITY_FLAG:
            return false;

        default:
            return hasJustAddedCity;

    }
};

export default hasJustAddedCity;

