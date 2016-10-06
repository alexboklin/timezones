import React from 'react';
import { AutoComplete } from 'redux-form-material-ui';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm } from 'redux-form';

const dataSourceConfig = {
    text: 'textKey',
    value: 'valueKey',
};

const validate = values => {
    const errors = {};
    const requiredFields = [ 'citySuggestion' ];
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Required'
        }
    });

    if (values.citySuggestion && !/^[A-Za-z\s]{1,},[A-Za-z\s]{1,}$/.test(values.citySuggestion)) {
        errors.citySuggestion = 'City and country name separated by comma'
    }
    return errors
};

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

    // handleNewRequest = (chosenRequest, index) => {
    //     console.log("chosenRequest", chosenRequest);
    //     console.log("index", index);
    //
    //     // TODO: deal with Snackbar component
    //     // this.setState({
    //     //     snackBarIsOpen: true,
    //     //     snackBarMessage: `${chosenRequest} was added to the list`
    //     // });
    //
    //     this.props.cityListActions.addLocationAndItsLocalTime(this.props.citySuggestions[index].id, chosenRequest);
    // };

    // See https://github.com/erikras/redux-form/issues/190 for solution
    // Returns an object where
    handleNewRequest = data => {
        console.log('HERE: ', data);

        let citySuggestionWithId = this.props.citySuggestions.find(
            citySuggestion => citySuggestion.text == data.citySuggestion
        );

        console.log('ID: ', citySuggestionWithId.id);

        // TODO: validate to see if the list already contains the city
        this.props.cityListActions.addLocationAndItsLocalTime(citySuggestionWithId.id);
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
        const { handleSubmit, pristine, reset, submitting } = this.props;

        let suggestions = this.props.citySuggestions.map( suggestion => ({
            text: suggestion.text,
            value:  (
                <MenuItem primaryText="text" value={suggestion}/>
            )
        }));

        let suggestions2 = this.props.citySuggestions.map( suggestion => ({
            textKey: suggestion.text,
            valueKey: suggestion.id
        }));

        return (
            // .map(suggestion => suggestion.text)
            // See http://redux-form.com/6.0.5/docs/api/Props.md/
            <form onSubmit={handleSubmit(this.handleNewRequest)}>
                <div>
                    <Field
                        name="citySuggestion"
                        component={AutoComplete}
                        filter={MUIAutoComplete.caseInsensitiveFilter}
                        floatingLabelText="Type the city -- case insensitive"
                        dataSource={this.props.citySuggestions.map(suggestion => suggestion.text)}
                        dataSourceConfig={dataSourceConfig}
                        onNewRequest={this.handleNewRequest}
                        onUpdateInput={this.handleUpdateInput}
                    />
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                </div>
            </form>
        );
    }
}

AutoCompleteForm = reduxForm({
    form: 'autoCompleteForm',
    validate
})(AutoCompleteForm);

export default AutoCompleteForm