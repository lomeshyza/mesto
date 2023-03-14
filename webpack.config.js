module.exports = {
entry: { main: './src/index.js' },
output: {
       path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  }
}

// module.exports — это синтаксис экспорта в Node.js