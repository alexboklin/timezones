import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';
import Chip from 'material-ui/Chip';
// import Snackbar from 'material-ui/Snackbar';
import moment from 'moment-timezone';

export default class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            interval: null,

            deletedCity: {}, // TODO: make this a part of the state?
            snackBarAutoHideDuration: 4000,
            snackBarMessage: '',
            snackBarIsOpen: false
        }
    };

    // See http://stackoverflow.com/questions/36299174/setinterval-in-a-react-app
    // Also see https://facebook.github.io/react/docs/reusable-components.html#mixins
    componentDidMount() {
        let interval = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            })
        }, 1000);
        this.setState({
            interval: interval
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    handleRequestDelete = (city) => {
        this.setState({
            deletedCity: city,
            snackBarIsOpen: true,
            snackBarMessage: `${city.text} removed from the list`
        });
        
        this.props.cityListActions.deleteAndCacheCityAndNotify(city);
    };

    // handleActionTouchTap = () => {
    //     this.setState({
    //         snackBarIsOpen: false
    //     });
    //     this.props.cityListActions.restoreDeletedCityAndNotify(this.state.deletedCity);
    //
    // };
    //
    // handleRequestClose = () => {
    //     this.setState({
    //         snackBarIsOpen: false
    //     });
    // };

    // <Snackbar
    //     open={this.state.snackBarIsOpen}
    //     message={this.state.snackBarMessage}
    //     action="undo"
    //     autoHideDuration={this.state.snackBarAutoHideDuration}
    //     onActionTouchTap={this.handleActionTouchTap}
    //     onRequestClose={this.handleRequestClose}
    // />

    render() {
        return (
            <div>
                <List>
                    {
                        this.props.cityList.map(cityItem =>
                            <Chip key={cityItem.place} onRequestDelete={() => this.handleRequestDelete(cityItem)}>
                                {`${cityItem.city.suggest.output} ${moment().tz(cityItem.city.timeZoneId).format()} (${cityItem.city.timeZoneName})`}
                            </Chip>
                        )
                    }
                </List>
            </div>
        )
    };
};

// TODO: update
CityList.PropTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
};