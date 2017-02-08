module.exports = [
    {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css'
    },
    {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    }, {
        test: '\.jpg$',
        include: /src/,
        loader: 'file'
    }, {
        include: /src/,
        test: '\.png$',
        loader: 'url'
    }
];
