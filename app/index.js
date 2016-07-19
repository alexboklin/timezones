import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
  render() {
    return (
      <div>Hello ReactJS Program!</div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));