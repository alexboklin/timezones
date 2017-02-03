import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const dataSourceConfig = {
    text: 'cityName',
    value: 'cityId',
};

export default class AutoCompleteForm extends React.Component {
    state = {searchText: ''};

    // Callback function that is fired when the user updates the TextField
    handleUpdateInput = (searchText, dataSource) => {
        this.props.citySuggestionsActions.fetchCitySuggestions(searchText);
        this.setState({searchText: searchText});
    };

    // Callback function that is fired when a list item is selected, or enter is pressed in the TextField
    handleNewRequest = (chosenRequest, index) => {
        // TODO: preserve format that comes from the server: city (country)
        this.props.cityListActions.addCityToListAndNotify(chosenRequest);
        this.setState({searchText: ''});
    };

    render() {
        return (
            <AutoComplete
                name="citySuggestion"
                filter={AutoComplete.caseInsensitiveFilter}
                floatingLabelText="Type the city -- case insensitive"
                dataSource={this.props.citySuggestions.map(suggestion => ({
                    cityName: suggestion.text,
                    cityId: suggestion.id
                }))}
                dataSourceConfig={dataSourceConfig}
                searchText={this.state.searchText}
                onUpdateInput={this.handleUpdateInput}
                onNewRequest={this.handleNewRequest}
            />
        );
    }
}