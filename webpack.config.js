var config = {
   entry: './main.js',
	
   output: {
      path:'/',
      filename: '/home/swati/Desktop/INTERN/reactApp/public/bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
             query: {
               presets: ['es2015', 'react']
             }
         }
      ]
   }
}

module.exports = config;