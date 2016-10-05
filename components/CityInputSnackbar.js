import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class CityInputSnackbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snackBarAutoHideDuration: 4000,
            snackBarMessage: '',
            snackBarIsOpen: false
        }
    };

    handleActionTouchTap = () => {
        this.setState({
            snackBarIsOpen: false
        });
        this.props.cityListActions.deleteCity(this.props.cityList.length - 1);
    };

    handleRequestClose = () => {
        this.setState({
            snackBarIsOpen: false
        });
    };

    render() {
        return (
            <div className="text-center">
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