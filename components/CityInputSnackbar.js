import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const CityInputSnackbar = (props) => (
    <div className="text-center">
        <Snackbar
            open={props.showNotification}
            message={`message`}
            action="undo"
            autoHideDuration={4000}
            onActionTouchTap={() => props.cityListActions.deleteAndCacheCityAndNotify(props.cityList[props.cityList.length - 1])}
            onRequestClose={props.notificationActions.hideNotification}
        />
    </div>
);

export default CityInputSnackbar;

// export default class CityInputSnackbar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             snackBarAutoHideDuration: 4000,
//             snackBarMessage: '',
//             snackBarIsOpen: false
//         }
//     };
//
//     handleActionTouchTap = () => {
//         this.setState({
//             snackBarIsOpen: false
//         });
//         this.props.cityListActions.deleteCityAndNotify(this.props.cityList.length - 1);
//     };
//
//     handleRequestClose = () => {
//         this.setState({
//             snackBarIsOpen: false
//         });
//     };
//
//     render() {
//         return (
//             <div className="text-center">
//                 <Snackbar
//                     open={this.state.snackBarIsOpen}
//                     message={this.state.snackBarMessage}
//                     action="undo"
//                     autoHideDuration={this.state.snackBarAutoHideDuration}
//                     onActionTouchTap={this.handleActionTouchTap}
//                     onRequestClose={this.handleRequestClose}
//                 />
//             </div>
//         )
//     };
// };