var webpack = require('webpack');

module.exports = {
	entry: {
		prod: ["./public/assets/js/Bet/Bet"],
		vendor: ["./public/assets/library/backbone/backbone-min","./public/assets/library/underscore/underscore-min"]
	},	
	output: {
		path: __dirname + "/public/assets/js",
		publicPath: "/public/assets/js/",
		filename: "[name].js"
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({minimize: true})]
}
