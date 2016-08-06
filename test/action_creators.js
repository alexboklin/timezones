import expect from 'expect';
import * as actions from '../redux/actions';
import { ADD_CITY, DELETE_CITY, RESTORE_LAST_DELETED_CITY } from '../redux/actionTypes';

describe('actions', () => {
    it('should add a new city to the list', () => {
        const name = 'NYC';
        const expectedAction = {
            type: ADD_CITY,
            payload: {
                name: 'NYC'
            }
        };
        expect(actions.addCity(name)).toEqual(expectedAction)
    })
});
