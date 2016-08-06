import { ADD_CITY, DELETE_CITY, RESTORE_LAST_DELETED_CITY } from '../actionTypes';

let cities = (cities = [], action) => {
    switch (action.type) {
        case ADD_CITY:
            return [
                ...cities,
                {
                    id: cities.reduce((maxId, city) => Math.max(city.id, maxId), -1) + 1,
                    name: action.payload.name,
                }
            ];
        case DELETE_CITY:       
            return cities.filter((city) => {
                return city.id !== action.payload.id;
            });
        case RESTORE_LAST_DELETED_CITY:
            return [
                ...cities.slice(0, action.payload.city.id),
                action.payload.city,
                ...cities.slice(action.payload.city.id)
            ];
            // return cities.
            //     slice(0, action.payload.city.id)
            //     .concat(action.payload.city)
            //     .concat(cities.slice(action.payload.city.id));
        default:
            return cities;
    }
};

export default cities