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
        const cityListBefore = [];
        Object.freeze(cityListBefore);
        expect(
            cities(cityListBefore, {
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
    it('should remove the city from the list by id', () => {
        const cityListBefore = [
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
            },
            {
                id: 3,
                name: 'The Hub'
            }
        ];
        Object.freeze(cityListBefore);
        expect(
            cities(
                cityListBefore,
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
            },
            {
                id: 2,
                name: 'The Hub'
            }
        ])
    });
    it('should restore the last deleted city', () => {
        const cityListBefore = [
            {
                id: 0,
                name: 'NYC'
            },
            {
                id: 1,
                name: 'Frisco'
            },
            {
                id: 2,
                name: 'The Hub'
            }
        ];
        Object.freeze(cityListBefore);
        expect(
            cities(
                cityListBefore,
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
                },
                {
                    id: 3,
                    name: 'The Hub'
                }
            ]
        )
    });
});




