import {
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION
} from '../../actions/actionTypes';

let showNotification = (showNotification = false, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            console.log('SHOW_NOTIFICATION');
            return true;

        case HIDE_NOTIFICATION:
            return false;

        default:
            return false;
    }
};

export default showNotification;
