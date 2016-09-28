import {
    ADD_CITY,
    DELETE_CITY,
    RESTORE_LAST_DELETED_CITY
} from '../../actions/actionTypes';

let cityList = (cityList = [], action) => {
    switch (action.type) {
        case ADD_CITY:
            return [
                ...cityList,
                {
                    place: cityList.reduce((maxId, city) => Math.max(city.place, maxId), -1) + 1,
                    nameAndCountry: action.payload.nameAndCountry
                }
            ];
        case DELETE_CITY:       
            return [
                ...cityList.slice(0, action.payload.place),
                ...cityList.slice(action.payload.place + 1).map(
                    city => ({
                        place: city.place - 1,
                        name: city.name
                    })
                )
            ];
        case RESTORE_LAST_DELETED_CITY:
            return [
                ...cityList.slice(0, action.payload.city.place),
                action.payload.city,
                ...cityList.slice(action.payload.city.place).map(
                    city => ({
                        place: city.place + 1,
                        name: city.name
                    })
                )
            ];
        default:
            return cityList;
    }
};

export default cityList;