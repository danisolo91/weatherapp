const path = require('path');
const { mainModule } = require('process');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map', // to show exactly where errors come from
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};