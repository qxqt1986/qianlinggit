var webpack = require('webpack');
var path = require("path");

module.exports = {
	entry:"./app/index.jsx",
	
	output:{
		//path:"./build/",
		path: path.resolve(__dirname, './build'),
		//publicPath: path.resolve(__dirname, './build'),
		filename:"[name].js"
	},
	module:{
		rules: [
			{
				test: /\.jsx?$|\.tsx$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
								presets: ["es2015", "react"]
						}
					 },
					]
			},

			{
				test: /\.css$/,
				use: [
						{
							loader: "style-loader",
							options: {
									// modules: true // 设置css模块化,详情参考https://github.com/css-modules/css-modules
							}
						},
						{
							loader: "css-loader",
							options: {
									// modules: true // 设置css模块化,详情参考https://github.com/css-modules/css-modules
							}
						}
				]
			}
	]
},

	resolve:{
		extensions:[".js",".css",".jsx"] //自动补全识别后缀
	}
	
}