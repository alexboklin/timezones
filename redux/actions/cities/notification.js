import {
    CHANGE_NOTIFICATION_TEXT,
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION
} from '../actionTypes';

export const changeNotificationText = (notification) => ({
    type: CHANGE_NOTIFICATION_TEXT,
    payload: {
        notification
    }
});

export const showNotification = () => ({
    type: SHOW_NOTIFICATION,
});

export const hideNotification = () => ({
    type: HIDE_NOTIFICATION
});
