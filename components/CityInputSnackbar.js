import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const CityInputSnackbar = (props) => {
    return (
        <div className="text-center">
            <Snackbar
                open={props.showNotification}
                message={props.notificationText}
                action="undo"
                autoHideDuration={4000}
                onActionTouchTap={() => props.cityListActions.deleteAndCacheCityAndNotify(props.cityList[props.cityList.length - 1])}
                onRequestClose={props.notificationActions.hideNotification}
            />
        </div>
    );
};

export default CityInputSnackbar;