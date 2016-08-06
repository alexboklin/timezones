import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Snackbar from 'material-ui/Snackbar';

export default class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deletedCity: {},
            snackBarAutoHideDuration: 4000,
            snackBarMessage: '',
            snackBarIsOpen: false
        }
    };

    handleRequestDelete = (city) => {
        this.setState({
            deletedCity: city,
            snackBarIsOpen: true,
            snackBarMessage: `${city.name} removed from the list`
        });
        
        this.props.actions.deleteCity(city.id);
    };

    handleActionTouchTap = () => {
        this.setState({
            snackBarIsOpen: false
        });
        this.props.actions.restoreLastDeletedCity(this.state.deletedCity);
        
    };

    handleRequestClose = () => {
        this.setState({
            snackBarIsOpen: false
        });
    };   
    
    render() {
        return (
            <div>
                <List className="text-center">
                    {
                        this.props.cities.map((city) =>
                            <Chip key={city.id} onRequestDelete={() => this.handleRequestDelete(city)}>
                                {city.name}
                            </Chip>
                        )
                    }
                </List>
                <Snackbar
                    open={this.state.snackBarIsOpen}
                    message={this.state.snackBarMessage}
                    action="undo"
                    autoHideDuration={this.state.snackBarAutoHideDuration}
                    onActionTouchTap={this.handleActionTouchTap}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    };
};

CityList.PropTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
};