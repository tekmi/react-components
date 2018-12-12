const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const PORT = parseInt(process.env.PORT, 10) || 8000;
const HOST = process.env.HOST || '0.0.0.0';

module.exports = (env, argv) => {
    return {
        entry: {
            index: './examples/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].component.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: {minimize: true}
                        }
                    ]
                }
            ]
        },
        devtool: "source-map",
        devServer: {
            compress: true,
            host: HOST,
            port: PORT,
            historyApiFallback: {
                disableDotRule: true,
            },
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./examples/index.html",
                filename: "./index.html"
            })
        ]
    }
};
