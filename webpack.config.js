const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({ template: './src/index.html', filename: './index.html' })
	],
	output: {
		path: path.resolve(__dirname, 'public/'),
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: {
			disableDotRule: true
		}
	},
	devtool: 'source-map'
}