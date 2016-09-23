import {
    ADD_CITY,
    DELETE_CITY,
    RESTORE_LAST_DELETED_CITY
} from '../actions/actionTypes';

let cities = (cities = [], action) => {
    switch (action.type) {
        case ADD_CITY:
            return [
                ...cities,
                {
                    id: cities.reduce((maxId, city) => Math.max(city.id, maxId), -1) + 1,
                    name: action.payload.name
                }
            ];
        case DELETE_CITY:       
            return [
                ...cities.slice(0, action.payload.id),
                ...cities.slice(action.payload.id + 1).map(
                    city => ({
                        id: city.id - 1,
                        name: city.name
                    })
                )
            ];
        case RESTORE_LAST_DELETED_CITY:
            return [
                ...cities.slice(0, action.payload.city.id),
                action.payload.city,
                ...cities.slice(action.payload.city.id).map(
                    city => ({
                        id: city.id + 1,
                        name: city.name
                    })
                )
            ];
        default:
            return cities;
    }
};

export default cities;