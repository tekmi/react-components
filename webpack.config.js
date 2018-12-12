const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const PORT = parseInt(process.env.PORT, 10) || 8000;
const HOST = process.env.HOST || '0.0.0.0';

module.exports = (env, argv) => {
    return {
        entry: {
            index: './src/index.js',
            // button: './src/Button/index.js',
            // 'component/a': './src/A/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].component.js',
            library: 'DrukComponents',
            libraryTarget: 'umd',
            publicPath: '/dist/',
            umdNamedDefine: true
        },
        resolve: {
            alias: {
                'react': path.resolve(__dirname, './node_modules/react'),
                'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            }
        },
        externals: {
            react: {
                commonjs: "react",
                commonjs2: "react",
                amd: "React",
                root: "React",
            },
            "react-dom": {
                commonjs: "react-dom",
                commonjs2: "react-dom",
                amd: "ReactDOM",
                root: "ReactDOM",
            }
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
                template: "./public/index.html",
                filename: "./index.html"
            })
        ]
    }
};
