var React = require('react');
import ReactDOM from 'react-dom';

var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program!</div>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));