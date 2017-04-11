import {
    RECEIVE_CITY_SUGGESTIONS
} from '../../actions/actionTypes';

let citySuggestions = (citySuggestions = [], action) => {
    switch (action.type) {

        case RECEIVE_CITY_SUGGESTIONS:
            return [...action.citySuggestions];

        default:
            return citySuggestions;
    }
};

export default citySuggestions;