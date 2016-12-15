const path = require('path');

module.exports = {
    entry: './app/App.js',
    output: { path: __dirname + '/public', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-decorators-legacy' ],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};
