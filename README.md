npm init -y
npm install -D webpack webpack-cli ts-loader webpack-dev-server typescript

create webpack.config.js
<!-- const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
}; -->


create tsconfig.json
<!-- {
  "compilerOptions": {
      "noImplicitAny": true,
      "target": "ES5",
      "module": "ES6"
  }
} -->

add scripts to package.json
  "develop": "webpack-dev-server --mode development",
  "build" : "webpack --mode production"

