import {
    ADD_CITY,
    DELETE_CITY_BY_ITS_PLACE,
    RESTORE_DELETED_CITY
} from '../../actions/actionTypes';

let cityList = (cityList = [], action) => {
    switch (action.type) {
        case ADD_CITY:
            let city = action.city;
            city.placeInList = cityList.reduce((maxId, city) => Math.max(city.place, maxId), -1) + 1;
            return [...cityList, city];

        case DELETE_CITY_BY_ITS_PLACE:
            return [...cityList.slice(0, action.placeInList), ...cityList.slice(action.placeInList + 1)];

        // TODO: action.payload.city.place --> action.payload.place
        case RESTORE_DELETED_CITY:
            return [
                ...cityList.slice(0, action.payload.city.place),
                action.payload.city,
                ...cityList.slice(action.payload.city.place).map(
                    city => ({
                        place: city.place + 1,
                        nameAndCountry: city.nameAndCountry
                    })
                )
            ];

        default:
            return cityList;
    }
};

export default cityList;