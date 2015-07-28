'use strict';

import React from 'react';

var MainView = React.createClass({
  render: function() {
    return <div><h1>Alo, Alo!</h1></div>;
  }
});

React.render(<MainView/>,
  document.getElementById('container')
);
