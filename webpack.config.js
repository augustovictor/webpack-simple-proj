module.exports = {
	devtool : 'eval-source-map',

	entry   : __dirname + '/app/main.js',
	output  : {
		path     : __dirname + '/public',
		filename : 'bundle.js'
	},

	devserver: {
		contentBase        : './public',
		colors             : true,
		historyApiFallback : true,
		inline             : true
	}
};
