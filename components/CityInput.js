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
        // TODO: will probably need to update this.state.dataSource here using nextProps.citySuggestions
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

        // this.setState({
        //     inputText: searchText // TODO: remove. chosenRequest + searchText handle it nicely
        // });

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

    // this.state.dataSource vs. this.props.citySuggestions

    render() {
        // const dataSource = ['one', 'two', 'three'];

        return (
            <div className="text-center">
                <AutoComplete
                    hintText="Type in the city to search for"
                    dataSource={this.props.citySuggestions}
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