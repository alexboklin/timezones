import React from 'react';
import { AutoComplete } from 'redux-form-material-ui';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {};
    const requiredFields = ['citySuggestion'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });

    // See: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    if (values.citySuggestion && !/^[A-Za-z\s]{1,},[A-Za-z\s]{1,}$/.test(values.citySuggestion)) {
        errors.citySuggestion = 'City and country name separated by comma';
    }
    return errors;
};

class AutoCompleteForm extends React.Component {
    constructor(props) {
        super(props);
    };

    handleUpdateInput = (searchText, dataSource) => {
        this.props.citySuggestionsActions.fetchCitySuggestions(searchText);
    };

    // See https://github.com/erikras/redux-form/issues/190 for solution
    // TODO: now can remove onNewRequest from the Field
    handleNewRequest = data => {
        // console.log('data: ', data);
        // console.log('this.props.citySuggestions: ', this.props.citySuggestions);

        let citySuggestionWithId = this.props.citySuggestions.find(
            citySuggestion => citySuggestion.text == data.citySuggestion
        );

        // console.log('citySuggestionWithId: ', citySuggestionWithId);

        this.props.cityListActions.addCityToListAndNotify(citySuggestionWithId.id);
    };

    // See: http://erikras.github.io/redux-form-material-ui/
    // Also see: http://redux-form.com/6.0.5/examples/selectingFormValues/
    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            // See: http://redux-form.com/6.0.5/docs/api/Props.md/
            <form onSubmit={handleSubmit(this.handleNewRequest)}>
                <div>
                    <Field
                        name="citySuggestion"
                        component={AutoComplete}
                        filter={MUIAutoComplete.caseInsensitiveFilter}
                        floatingLabelText="Type the city -- case insensitive"
                        dataSource={this.props.citySuggestions.map(suggestion => suggestion.text)}
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