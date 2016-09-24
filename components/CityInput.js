import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Snackbar from 'material-ui/Snackbar';

export default class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snackBarAutoHideDuration: 4000,
            snackBarMessage: '',
            snackBarIsOpen: false
        }
    };

    // Snackbar handlers
    handleActionTouchTap = () => {
        this.setState({
            snackBarIsOpen: false
        });
        this.props.cityActions.deleteCity(this.props.cities.length - 1);
    };

    handleRequestClose = () => {
        this.setState({
            snackBarIsOpen: false
        });
    };

    // AutoComplete handlers
    // TODO: update state and pass stuff down via componentWillReceiveProps
    handleUpdateInput = (searchText, dataSource) => {
        // console.log("searchText: ", searchText);
        // console.log("dataSource: ", dataSource);

        this.props.citySuggentionActions.fetchCitySuggestions(searchText);
    };

    handleNewRequest = (chosenRequest, index) => {
        // console.log("chosenRequest", chosenRequest);
        // console.log("index", index);

        this.setState({
            snackBarIsOpen: true,
            snackBarMessage: `${chosenRequest} added to the list`
        });

        this.props.cityActions.addCity(chosenRequest);
    };

    render() {
        return (
            <div className="text-center">
                <AutoComplete
                    filter={AutoComplete.caseInsensitiveFilter}
                    floatingLabelText="Type the city -- case insensitive"
                    dataSource={this.props.citySuggestions.map(suggestion => suggestion.text)}
                    onNewRequest={this.handleNewRequest}
                    onUpdateInput={this.handleUpdateInput}
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