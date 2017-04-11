import expect from 'expect';

import cityListReducers from '../../../app/redux/reducers/cities/list';
import {
    ADD_CITY,
    DELETE_CITY_BY_ITS_PLACE,
    RESTORE_DELETED_CITY
} from '../../../app/redux/actions/actionTypes';

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
                city: {
                    accentName: 'NYC',
                    country: 'USA'
                }
            })
        ).toEqual(
            [
                {
                    placeInList: 0,
                    accentName: 'NYC',
                    country: 'USA'
                }
            ]
        )
    });
    it('should remove the city from the list by its place', () => {
        const cityListBefore = [
            {
                placeInList: 0,
                accentName: 'NYC',
                country: 'USA'
            },
            {
                placeInList: 1,
                accentName: 'LA',
                country: 'USA'
            },
            {
                placeInList: 2,
                accentName: 'Frisco',
                country: 'USA'
            },
            {
                placeInList: 3,
                accentName: 'The Hub',
                country: 'USA'
            }
        ];
        Object.freeze(cityListBefore);
        expect(
            cityListReducers(
                cityListBefore,
                {
                    type: DELETE_CITY_BY_ITS_PLACE,
                    placeInList: 1
                }
            )
        ).toEqual([
            {
                placeInList: 0,
                accentName: 'NYC',
                country: 'USA'
            },
            {
                placeInList: 1,
                accentName: 'Frisco',
                country: 'USA'
            },
            {
                placeInList: 2,
                accentName: 'The Hub',
                country: 'USA'
            }
        ])
    });
    it('should restore the last deleted city', () => {
        const cityListBefore = [
            {
                placeInList: 0,
                accentName: 'NYC',
                country: 'USA'
            },
            {
                placeInList: 1,
                accentName: 'Frisco',
                country: 'USA'
            },
            {
                placeInList: 2,
                accentName: 'The Hub',
                country: 'USA'
            }
        ];
        Object.freeze(cityListBefore);
        expect(
            cityListReducers(
                cityListBefore,
                {
                    type: RESTORE_DELETED_CITY,
                    city: {
                        placeInList: 1,
                        accentName: 'LA',
                        country: 'USA'
                    }
                }
            )
        ).toEqual(
            [
                {
                    placeInList: 0,
                    accentName: 'NYC',
                    country: 'USA'
                },
                {
                    placeInList: 1,
                    accentName: 'LA',
                    country: 'USA'
                },
                {
                    placeInList: 2,
                    accentName: 'Frisco',
                    country: 'USA'
                },
                {
                    placeInList: 3,
                    accentName: 'The Hub',
                    country: 'USA'
                }
            ]
        )
    });
});




