import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Snackbar from 'material-ui/Snackbar';

export default class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // dataSource: [], // TODO: pass via props and componentWillReceiveProps
            inputText: '', // TODO: remove. chosenRequest + searchText handle it nicely
            snackBarAutoHideDuration: 4000,
            snackBarMessage: '',
            snackBarIsOpen: false
        }
    };

    componentWillReceiveProps(nextProps) {
        console.log("nextProps: ", nextProps);
    };

    // Snackbar handlers
    handleActionTouchTap = () => {
        this.setState({
            snackBarIsOpen: false
        });
        this.props.actions.deleteCity(this.props.cities.length - 1);
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

        // TODO: send a request to the server to fetch city suggestions for dataSource

        this.setState({
            inputText: searchText // TODO: remove. chosenRequest + searchText handle it nicely
        });
    };

    handleNewRequest = (chosenRequest, index) => {
        // console.log("chosenRequest", chosenRequest);
        // console.log("index", index);

        this.setState({
            snackBarIsOpen: true,
            snackBarMessage: `${chosenRequest} added to the list`
        });

        this.props.actions.addCity(this.state.inputText);

        this.props.actions.fetchCitySuggestions(chosenRequest);
    };

    // this.state.dataSource vs. this.props.citySuggestions

    render() {
        const dataSource = ['one', 'two', 'three'];

        return (
            <div className="text-center">
                <AutoComplete
                    hintText="Type in the city to search for"
                    dataSource={dataSource}
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