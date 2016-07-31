import React from 'react';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

export default class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            snackBarAutoHideDuration: 4000,
            snackBarMessage: '',
            snackBarIsOpen: false
        }
    };

    handleChange = (event) => {
        this.setState({
            inputText: event.target.value // + snackBarMessage: `${event.target.value} added to the list`
        });
    };

    handleTouchTap = () => {
        this.setState({
            snackBarIsOpen: true
        });
    };

    handleSubmit = (event) => {
        // On hitting Enter we add city to the list.
        if (event.keyCode === 13) {
            // TODO: do this in handleChange along with changing inputText?
            this.setState({
                snackBarMessage: `${event.target.value} added to the list`
            });

            this.handleTouchTap();

            this.props.onSubmit(this.state.inputText);
        }
        
    };

    handleActionTouchTap = () => {
        console.log("Will delete the last added city!");
    };

    handleRequestClose = () => {
        this.setState({
            snackBarIsOpen: false
        });
    };

    render() {
        return (
            <div className="text-center">
                <TextField
                    hintText="Type in the city to search for"
                    value={this.state.inputText}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit}
                />
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