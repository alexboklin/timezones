import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Snackbar from 'material-ui/Snackbar';

export default class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deletedCity: {}, // TODO: make this a part of the state?
            snackBarAutoHideDuration: 4000,
            snackBarMessage: '',
            snackBarIsOpen: false
        }
    };

    handleRequestDelete = (city) => {
        this.setState({
            deletedCity: city,
            snackBarIsOpen: true,
            snackBarMessage: `${city.nameAndCountry} removed from the list`
        });
        
        this.props.cityListActions.deleteCity(city.place);
    };

    handleActionTouchTap = () => {
        this.setState({
            snackBarIsOpen: false
        });
        this.props.cityListActions.restoreLastDeletedCity(this.state.deletedCity);
        
    };

    handleRequestClose = () => {
        this.setState({
            snackBarIsOpen: false
        });
    };   
    
    render() {
        return (
            <div>
                <List>
                    {
                        this.props.cityList.map(city =>
                            <Chip key={city.place} onRequestDelete={() => this.handleRequestDelete(city)}>
                                {city.nameAndCountry}
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