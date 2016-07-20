import React from 'react';

export default class TimezoneInput extends React.Component {
  render() {
    return (
      <div>
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