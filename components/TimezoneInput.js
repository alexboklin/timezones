import React from 'react';

export default class TimezoneInput extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3 text-center">
        <form onSubmit={console.log("onSubmit")}>
          <input
            type="text"
            placeholder="Type in the city"
            value=""
            onChange={console.log("onChange")}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}