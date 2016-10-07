import expect from 'expect';
import * as cityListActions from '../../../redux/actions/cities/list';
import { ADD_CITY, DELETE_CITY, RESTORE_DELETED_CITY } from '../../../redux/actions/actionTypes';

describe('city list actions', () => {
    it('should create an action to add a new city to the list', () => {
        const cityAccentName = 'NYC';
        const country = 'USA';
        const expectedAction = {
            type: ADD_CITY,
            payload: {
                nameAndCountry: 'NYC, USA'
            }
        };
        expect(cityListActions.addCity(cityAccentName, country)).toEqual(expectedAction)
    });
    it('should create an action to remove the city from the list by its place', () => {
        const place = 1;
        const expectedAction = {
            type: DELETE_CITY,
            payload: {
                place: 1
            }
        };
        expect(cityListActions.deleteCity(place)).toEqual(expectedAction)
    });
    it('should create an action to restore the last deleted city', () => {
        const city = {
            place: 3,
            nameAndCountry: 'NYC, USA'
        };
        const expectedAction = {
            type: RESTORE_DELETED_CITY,
            payload: {
                city: {
                    place: 3,
                    nameAndCountry: 'NYC, USA'
                }
            }
        };
        expect(cityListActions.restoreLastDeletedCity(city)).toEqual(expectedAction)
    });
});
