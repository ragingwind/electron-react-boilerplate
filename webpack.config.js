// var path = require('path');
// // var webpack = require('webpack');
//
// // console.log(path.join(__dirname, 'app/components'));
//
// module.exports = {
//   context: __dirname + "/app",
//   output: {
//       path: __dirname + '/dist',
//       filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       test: /\.jsx$/,
//       loaders: ['babel'],
//       include: path.join(__dirname, 'app')
//     }]
//   }
// };
//
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + "/app",
    entry: './mainview.jsx',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              test: /.jsx$/,
              loader: 'babel',
              exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    stats: {
        colors: true
    }
};
