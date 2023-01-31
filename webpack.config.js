const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        bundle:path.resolve(__dirname,'./src/index.js')
    },
    output:{
        filename:'[name][contenthash].js',
        path:path.resolve(__dirname,'dist'),
        assetModuleFilename:'[name][ext]',
        clean:true,
    },
    devtool:'source-map',
    devServer:{
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
    },
    module:{
    rules:[
        {
            test:/\.css$/i,
            use:["style-loader","css-loader"],
        },
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env'],
                },
            }
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type:'asset/resource'

        },
    ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Webpack App',
            filename:'index.html',
            template:'./src/template.html',
        })
    ],
    mode:'development',
}