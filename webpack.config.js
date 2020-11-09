const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ],
    devServer: {
        port: 5200,
    },
};
