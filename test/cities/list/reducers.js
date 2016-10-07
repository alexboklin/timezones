import expect from 'expect';
import cityListReducers from '../../../redux/reducers/cities/list';
import { ADD_CITY, DELETE_CITY, RESTORE_DELETED_CITY } from '../../../redux/actions/actionTypes';

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
                    nameAndCountry: 'NYC'
                }
            })
        ).toEqual(
            [
                {
                    place: 0,
                    nameAndCountry: 'NYC'
                }
            ]
        )
    });
    it('should remove the city from the list by its place', () => {
        const cityListBefore = [
            {
                place: 0,
                nameAndCountry: 'NYC'
            },
            {
                place: 1,
                nameAndCountry: 'LA'
            },
            {
                place: 2,
                nameAndCountry: 'Frisco'
            },
            {
                place: 3,
                nameAndCountry: 'The Hub'
            }
        ];
        Object.freeze(cityListBefore);
        expect(
            cityListReducers(
                cityListBefore,
                {
                    type: DELETE_CITY,
                    payload: {
                        place: 1
                    }
                }
            )
        ).toEqual([
            {
                place: 0,
                nameAndCountry: 'NYC'
            },
            {
                place: 1,
                nameAndCountry: 'Frisco'
            },
            {
                place: 2,
                nameAndCountry: 'The Hub'
            }
        ])
    });
    it('should restore the last deleted city', () => {
        const cityListBefore = [
            {
                place: 0,
                nameAndCountry: 'NYC'
            },
            {
                place: 1,
                nameAndCountry: 'Frisco'
            },
            {
                place: 2,
                nameAndCountry: 'The Hub'
            }
        ];
        Object.freeze(cityListBefore);
        expect(
            cityListReducers(
                cityListBefore,
                {
                    type: RESTORE_DELETED_CITY,
                    payload: {
                        city: {
                            place: 1,
                            nameAndCountry: 'LA'
                        }
                    }
                }
            )
        ).toEqual(
            [
                {
                    place: 0,
                    nameAndCountry: 'NYC'
                },
                {
                    place: 1,
                    nameAndCountry: 'LA'
                },
                {
                    place: 2,
                    nameAndCountry: 'Frisco'
                },
                {
                    place: 3,
                    nameAndCountry: 'The Hub'
                }
            ]
        )
    });
});




