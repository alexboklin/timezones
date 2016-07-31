import React from 'react';
import TextField from 'material-ui/TextField';

export default class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    };

    handleChange = (event) => {
        this.setState({
            inputText: event.target.value
        });

    };

    handleSubmit = (event) => {
        // On hitting Enter we add city to the list.
        if (event.keyCode === 13) {
            console.log(`${this.state.inputText} has been added to the list!`);
            this.props.onSubmit(this.state.inputText);
        }
        
    };

    render() {
        return (
            <div className="text-center">
                <TextField
                    hintText="Type in the city you wish to search for"
                    value={this.state.inputText}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit}
                />
            </div>
        )
    };
};