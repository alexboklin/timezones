import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const CityListSnackbar = (props) => {
    return (
        <div>
            <Snackbar
                open={props.showNotification}
                message={props.notificationText}
                action="undo"
                autoHideDuration={4000}
                onActionTouchTap={props.cityListActions.restoreDeletedCityAndNotify(this.state.deletedCity)}
                onRequestClose={props.notificationActions.hideNotification}
            />
        </div>
    );
};

export default CityListSnackbar;