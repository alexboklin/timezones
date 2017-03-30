import React from 'react';
import { List } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import moment from 'moment-timezone';

// On timer implementation, see:
// https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
export default class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        // Check http://the-echoplex.net/flexyboxes/ for interactive demo.
        // TODO: move the style to a separate scss file.
        return (
            <div>
                <List style={{
                    'display': 'flex',
                    'flexDirection': 'column',
                    //'flex-wrap': 'nowrap',
                    'justifyContent': 'space-between',
                    //'align-content': 'stretch',
                    'alignItems': 'center'
                }}>
                    {
                        this.props.cityList.map(city =>
                            <Chip key={city.placeInList}
                                  onRequestDelete={() => this.props.cityListActions.deleteAndCacheCityAndNotify(city)}>
                                {`${city.suggest.output} ${moment().tz(city.timeZoneId).format()} (${city.timeZoneName})`}
                            </Chip>
                        )
                    }
                </List>
            </div>
        )
    }
}

// TODO: update
// CityList.PropTypes = {
//     cities: PropTypes.arrayOf(PropTypes.shape({
//         id:PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired
//     }).isRequired).isRequired
// };