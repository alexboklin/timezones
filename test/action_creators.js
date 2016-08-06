import expect from 'expect';
import * as actions from '../redux/actions';
import { ADD_CITY, DELETE_CITY, RESTORE_LAST_DELETED_CITY } from '../redux/actionTypes';

describe('actions', () => {
    it('should create an action to add a new city to the list', () => {
        const name = 'NYC';
        const expectedAction = {
            type: ADD_CITY,
            payload: {
                name: 'NYC'
            }
        };
        expect(actions.addCity(name)).toEqual(expectedAction)
    });
    it('should create an action to remove the city from the list by id', () => {
        const id = 1;
        const expectedAction = {
            type: DELETE_CITY,
            payload: {
                id: 1
            }
        };
        expect(actions.deleteCity(id)).toEqual(expectedAction)
    });
    it('should create an action to restore the last deleted city', () => {
        const city = {
            id: 3,
            name: 'NYC'
        };
        const expectedAction = {
            type: RESTORE_LAST_DELETED_CITY,
            payload: {
                city: {
                    id: 3,
                    name: 'NYC'
                }
            }
        };
        expect(actions.restoreLastDeletedCity(city)).toEqual(expectedAction)
    });
});
