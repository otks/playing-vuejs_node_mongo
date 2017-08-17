var path = require('path');
var webpack = require('webpack');
var copyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
	watch: true,
	entry: {
		app: './assets/app.js',
		vendor: [
			'vue',
			'vue-router',
			'material-components-web'
		]
	},
	output: {
		path: path.resolve(__dirname, 'assets/compiled'),
		publicPath: 'assets',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					},
					// other vue-loader options go here
					transformToRequire: {
						image: 'xlink:href'
					}
				}
			},
			// {
			// 	test: /\.js$/,
			// 	loader: 'babel-loader',
			// 	exclude: /node_modules/,
			// },
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				// options: {
				// 	name: 'image/[name].[ext]',
				// }
			},
			{
				test: /\.(svg)$/,
				loader: 'svg-sprite-loader',
				options: {
					runtimeCompat: true
				}
			},
			{
				test: /\.(woff|woff2)$/,
				loader: 'file-loader',
				// options: {
				// 	name: 'css/font/[name].[ext]'
				// }
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devtool: '#source-map'
};