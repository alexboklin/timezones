import { ADD_CITY, DELETE_CITY } from '../actionTypes';

function getId(cities) {
    return cities.reduce((maxId, city) => {
        return Math.max(city.id, maxId)
    }, -1) + 1;
}

// TODO: rename into cities so that the rootReducer only uses one name inside
let cityReducer = (cities = [], action) => {
    switch (action.type) {
        case ADD_CITY:
            return [
                ...cities,
                {
                    id: getId(cities),
                    name: action.payload.name,
                    enlisted: true                    
                }
            ];
        case DELETE_CITY:       
            return cities.filter((city) => {
                return city.id !== action.id;
            });
        default:
            return cities;
    }
};

export default cityReducer