import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted!");
        console.log(this.state);
    };

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3 text-center">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type in the city"
                        value={this.state.inputText}
                        onChange={this.handleChange}
                    />
                <input type="submit" value="Submit"/>
                </form>
                <RaisedButton label="Submit!"/>
            </div>
        )
    };
};
