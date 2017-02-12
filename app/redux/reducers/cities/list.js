import {
    ADD_CITY,
    DELETE_CITY_BY_ITS_PLACE,
    RESTORE_DELETED_CITY
} from '../../actions/actionTypes';

let cityList = (cityList = [], action) => {
    switch (action.type) {

        case ADD_CITY:
            let city = action.city;
            city.placeInList = cityList.reduce((maxId, city) => Math.max(city.placeInList, maxId), -1) + 1;
            return [...cityList, city];

        case DELETE_CITY_BY_ITS_PLACE:
            return [
                ...cityList.slice(0, action.placeInList),
                ...cityList.slice(action.placeInList + 1).map(
                    city => {
                        city.placeInList -= 1;
                        return city;
                    }
                )
            ];

        case RESTORE_DELETED_CITY:
            return [
                ...cityList.slice(0, action.city.placeInList),
                action.city,
                ...cityList.slice(action.city.placeInList).map(
                    city => {
                        city.placeInList += 1;
                        return city;
                    }
                )
            ];

        default:
            return cityList;
    }
};

export default cityList;