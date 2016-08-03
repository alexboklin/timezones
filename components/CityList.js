import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';
import Chip from 'material-ui/Chip';

export default class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //cityList: []
        }
    };

    handleRequestDelete = (id) => {
        this.props.actions.deleteCity(id);
    };

    render() {
        return (
            <List className="text-center">
                {
                    this.props.cities.map((city) =>
                        <Chip key={city.id} onRequestDelete={() => this.handleRequestDelete(city.id)}>
                            {city.name}
                        </Chip>
                    )
                }
            </List>
        )
    }
};

CityList.PropTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        enlisted: PropTypes.bool.isRequired
    }).isRequired).isRequired
};