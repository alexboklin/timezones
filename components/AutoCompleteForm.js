import React from 'react';
import { AutoComplete } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';

class AutoCompleteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
        };
    };

    // TODO: update state and pass stuff down via componentWillReceiveProps
    handleUpdateInput = (searchText, dataSource) => {
        console.log("searchText: ", searchText);
        console.log("dataSource: ", dataSource);

        this.props.citySuggestionsActions.fetchCitySuggestions(searchText);
    };

    handleNewRequest = (chosenRequest, index) => {
        console.log("chosenRequest", chosenRequest);
        console.log("index", index);

        // TODO: deal with Snackbar component
        // this.setState({
        //     snackBarIsOpen: true,
        //     snackBarMessage: `${chosenRequest} was added to the list`
        // });

        this.props.cityListActions.addLocationAndItsLocalTime(this.props.citySuggestions[index].id, chosenRequest);
    };

    // renderAutoComplete = () => (
    //     <Autocomplete
    //         filter={AutoComplete.caseInsensitiveFilter}
    //         floatingLabelText="Type the city -- case insensitive"
    //         dataSource={this.props.citySuggestions.map(suggestion => suggestion.text)}
    //         onNewRequest={this.handleNewRequest}
    //         onUpdateInput={this.handleUpdateInput}
    //     />
    // );

// <form>
// <Field name="citySuggester" component={this.renderAutoComplete}/>
// </form>

    // See: http://erikras.github.io/redux-form-material-ui/
    // Also see: http://redux-form.com/6.0.5/examples/selectingFormValues/
    render() {
        return (
            <form>
                <Field
                    name="citySuggester"
                    component={AutoComplete}
                    filter={AutoComplete.caseInsensitiveFilter}
                    floatingLabelText="Type the city -- case insensitive"
                    dataSource={this.props.citySuggestions.map(suggestion => suggestion.text)}
                    onNewRequest={this.handleNewRequest}
                    onUpdateInput={this.handleUpdateInput}
                />
            </form>
        );
    }
}

AutoCompleteForm = reduxForm({
    form: 'autoCompleteForm',
    // validate
})(AutoCompleteForm);

export default AutoCompleteForm