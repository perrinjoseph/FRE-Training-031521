const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.[hash].js"
    },
    resolve: {
        modules: [__dirname,"src","node_modules"],
        extensions: ["*",".js",".jsx","tsx",".ts"]
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:require.resolve("babel-loader")
            },
            {
                test:/\.css$/,
                loader:["style-loader","css-loader"]
            }
        ]
    }
}