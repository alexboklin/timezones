import expect from 'expect';
import cities from '../redux/reducers/cities';
import { ADD_CITY, DELETE_CITY, RESTORE_LAST_DELETED_CITY } from '../redux/actionTypes';

describe('city reducer', () => {
    it('should return the initial state', () => {
        expect(
            cities(undefined, {})
        ).toEqual(
            []
        )
    });
    it('should add a new city to the list', () => {
        expect(
            cities([], {
                type: ADD_CITY,
                payload: {
                    name: 'NYC'
                }
            })
        ).toEqual(
            [
                {
                    id: 0,
                    name: 'NYC'
                }
            ]
        )
    });

    // TODO: sort out the problem with 0, 1, 2 turning to 0, 2 when removing id 1!
    it('should remove the city from the list by id', () => {
        expect(
            cities(
                [
                    {
                        id: 0,
                        name: 'NYC'
                    },
                    {
                        id: 1,
                        name: 'LA'
                    },
                    {
                        id: 2,
                        name: 'Frisco'
                    }
                ],
                {
                    type: DELETE_CITY,
                    payload: {
                        id: 1
                    }
                }
            )
        ).toEqual([
            {
                id: 0,
                name: 'NYC'
            },
            {
                id: 1,
                name: 'Frisco'
            }
        ])
    });
    it('should restore the last deleted city', () => {
        expect(
            cities(
                [
                    {
                        id: 0,
                        name: 'NYC'
                    },
                    {
                        id: 2,
                        name: 'Frisco'
                    }
                ],
                {
                    type: RESTORE_LAST_DELETED_CITY,
                    payload: {
                        city: {
                            id: 1,
                            name: 'LA'
                        }
                    }
                }
            )
        ).toEqual(
            [
                {
                    id: 0,
                    name: 'NYC'
                },
                {
                    id: 1,
                    name: 'LA'
                },
                {
                    id: 2,
                    name: 'Frisco'
                }
            ]
        )
    });
});




