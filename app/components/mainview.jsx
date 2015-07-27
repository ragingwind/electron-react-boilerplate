'use strict';

import React from 'react';

var Main = React.createClass({
  render: function() {
    return <div><h1>Alo, Alo!</h1></div>;
  }
});

React.render(<Main/>,
  document.getElementById('container')
);
