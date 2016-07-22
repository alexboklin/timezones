import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

export default class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: []
        }
    };

    render() {
        return (
            <List className="col-lg-4 text-center">
                <ListItem primaryText="First city" rightToggle={<Toggle/>}/>
            </List>
        )
    }
};