import {
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION
} from '../actionTypes';

export const showNotification = () => ({
    type: SHOW_NOTIFICATION
});

export const hideNotification = () => ({
    type: HIDE_NOTIFICATION
});
