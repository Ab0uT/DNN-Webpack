const path = require("path");
module.exports = {
    entry: `${__dirname}/src/app/index.js`,
    output: {
        path: path.resolve(__dirname, "scripts"),
        filename: "main.bundle.js"
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: [
                {loader: 'html-loader'}
            ]
        }]
    },
    stats: {
        colors: true
    },
    devtool: "source-map"
};