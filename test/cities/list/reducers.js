import expect from 'expect';
import cityListReducers from '../../../redux/reducers/cities/list';
import { ADD_CITY, DELETE_CITY, RESTORE_LAST_DELETED_CITY } from '../../../redux/actions/actionTypes';

describe('city list reducers', () => {
    it('should return the initial state', () => {
        expect(
            cityListReducers(undefined, {})
        ).toEqual(
            []
        )
    });
    it('should add a new city to the list', () => {
        const cityListBefore = [];
        Object.freeze(cityListBefore);
        expect(
            cityListReducers(cityListBefore, {
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
            cityListReducers(
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
            cityListReducers(
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




