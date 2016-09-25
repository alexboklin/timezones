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
                    id: cityList.reduce((maxId, city) => Math.max(city.id, maxId), -1) + 1,
                    name: action.payload.name
                }
            ];
        case DELETE_CITY:       
            return [
                ...cityList.slice(0, action.payload.id),
                ...cityList.slice(action.payload.id + 1).map(
                    city => ({
                        id: city.id - 1,
                        name: city.name
                    })
                )
            ];
        case RESTORE_LAST_DELETED_CITY:
            return [
                ...cityList.slice(0, action.payload.city.id),
                action.payload.city,
                ...cityList.slice(action.payload.city.id).map(
                    city => ({
                        id: city.id + 1,
                        name: city.name
                    })
                )
            ];
        default:
            return cityList;
    }
};

export default cityList;