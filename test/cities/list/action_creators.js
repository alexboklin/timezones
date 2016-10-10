import expect from 'expect';
import * as cityListActions from '../../../redux/actions/cities/list';
import { ADD_CITY, DELETE_CITY_BY_ITS_PLACE, RESTORE_DELETED_CITY } from '../../../redux/actions/actionTypes';

describe('city list actions', () => {
    it('should create an action to add a new city to the list', () => {
        const city = {
            accentName: 'NYC',
            country: 'USA'
        };

        const expectedAction = {
            type: ADD_CITY,
            city: {
                accentName: 'NYC',
                country: 'USA'
            }
        };
        expect(cityListActions.addCity(city)).toEqual(expectedAction)
    });
    it('should create an action to remove the city from the list by its placeInList', () => {
        const placeInList = 1;
        const expectedAction = {
            type: DELETE_CITY_BY_ITS_PLACE,
            placeInList: 1

        };
        expect(cityListActions.deleteCityByItsPlace(placeInList)).toEqual(expectedAction)
    });
    it('should create an action to restore the last deleted city', () => {
        const city = {
            placeInList: 3,
            accentName: 'NYC',
            country: 'USA'
        };
        const expectedAction = {
            type: RESTORE_DELETED_CITY,
            city: {
                placeInList: 3,
                accentName: 'NYC',
                country: 'USA'
            }
        };
        expect(cityListActions.restoreCity(city)).toEqual(expectedAction)
    });
});
