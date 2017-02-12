import expect from 'expect';
import * as cityListActions from '../../../app/redux/actions/cities/list';
import * as actionTypes from '../../../app/redux/actions/actionTypes';

describe('city list actions', () => {
    it('should create an action to add a new city to the list', () => {
        const city = {
            accentName: 'NYC',
            country: 'USA'
        };

        const expectedAction = {
            type: actionTypes.ADD_CITY,
            city: {
                accentName: 'NYC',
                country: 'USA'
            }
        };
        expect(cityListActions.addCity(city)).toEqual(expectedAction)
    });

    it('should create an action to toggle the flag signifying that we are in the process of adding a city', () => {
        const expectedAction = {
            type: actionTypes.TOGGLE_ADDING_CITY_FLAG,
        };
        expect(cityListActions.toggleAddingCityFlag()).toEqual(expectedAction)
    });

    it('should create an action to untoggle the flag signifying that we are in the process of adding a city', () => {
        const expectedAction = {
            type: actionTypes.UNTOGGLE_ADDING_CITY_FLAG,
        };
        expect(cityListActions.untoggleAddingCityFlag()).toEqual(expectedAction)
    });

    it('should create an action to remove the city from the list by its placeInList', () => {
        const placeInList = 1;
        const expectedAction = {
            type: actionTypes.DELETE_CITY_BY_ITS_PLACE,
            placeInList: 1

        };
        expect(cityListActions.deleteCityByItsPlace(placeInList)).toEqual(expectedAction)
    });

    it('should create an action to cache the city that we have just removed from the list', () => {
        const city = {
            accentName: 'NYC',
            country: 'USA'
        };

        const expectedAction = {
            type: actionTypes.CACHE_DELETED_CITY,
            city: {
                accentName: 'NYC',
                country: 'USA'
            }
        };
        expect(cityListActions.cacheDeletedCity(city)).toEqual(expectedAction)
    });

    it('should create an action to remove the saved city from cache', () => {
        const expectedAction = {
            type: actionTypes.CLEAR_CACHED_DELETED_CITY,
        };
        expect(cityListActions.clearCachedDeletedCity()).toEqual(expectedAction)
    });

    it('should create an action to restore the last deleted city', () => {
        const city = {
            placeInList: 3,
            accentName: 'NYC',
            country: 'USA'
        };
        const expectedAction = {
            type: actionTypes.RESTORE_DELETED_CITY,
            city: {
                placeInList: 3,
                accentName: 'NYC',
                country: 'USA'
            }
        };
        expect(cityListActions.restoreCity(city)).toEqual(expectedAction)
    });
});
