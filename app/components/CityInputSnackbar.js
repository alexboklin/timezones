import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const CityInputSnackbar = props => {
    return <Snackbar
        contentStyle={{textAlign: 'center'}}
        open={props.showNotification}
        message={props.notificationText}
        action="undo"
        autoHideDuration={4000}
        onActionTouchTap={
            props.hasJustAddedCity ?
                () => props.cityListActions.deleteAndCacheCityAndNotify(props.cityList[props.cityList.length - 1]) :
                props.cityListActions.restoreDeletedCityAndNotify
        }
        onRequestClose={props.cityListActions.clearCachedDeletedCityAndHideNotification}
    />;
};

export default CityInputSnackbar;