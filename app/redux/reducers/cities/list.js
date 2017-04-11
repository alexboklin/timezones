import {
    ADD_CITY,
    DELETE_CITY_BY_ITS_PLACE,
    RESTORE_DELETED_CITY
} from '../../actions/actionTypes';

let cityList = (cityList = [], action) => {
    const { city, placeInList } = action;

    switch (action.type) {

        case ADD_CITY:
            return [
                ...cityList,
                {...city, placeInList: cityList.reduce((maxId, city) => Math.max(city.placeInList, maxId), -1) + 1}
            ];

        case DELETE_CITY_BY_ITS_PLACE:
            return [
                ...cityList.slice(0, placeInList),
                ...cityList.slice(placeInList + 1).map(
                    city => ({...city, placeInList: city.placeInList-1})
                )
            ];

        case RESTORE_DELETED_CITY:
            return [
                ...cityList.slice(0, city.placeInList),
                city,
                ...cityList.slice(city.placeInList).map(
                    city => ({...city, placeInList: city.placeInList+1})
                )
            ];

        default:
            return cityList;
    }
};

export default cityList;