const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        main: './src/main.js',
        login: './src/login.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
    }
};
