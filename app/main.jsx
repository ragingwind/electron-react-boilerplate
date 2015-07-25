'use strict';

var React = require('react');

var MainApp = React.createClass({
  render: function() {
    return <div><h1>Alo, Alo!</h1></div>;
  }
});

React.render(<MainApp/>,
  document.getElementById('container')
);
