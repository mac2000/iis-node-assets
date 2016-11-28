const express = require('express')
const browserify = require('browserify-middleware')
const sass = require('node-sass-middleware')
const postcss = require('postcss-middleware')
const autoprefixer = require('autoprefixer')
const babelify = require('babelify')
const path = require('path')
const http = require('http')

const destPath = path.join(__dirname, '/dist')
const app = express()

app.use(browserify('src', {transform: babelify, basedir: 'src'}))

app.use(sass({
    src: path.join(__dirname, '/src'),
    response: false,
    dest: destPath,
    includePaths: ['src'],
    sourceMap: true
}))

app.use(postcss({
	plugins: [autoprefixer()],
	src: req => path.join(destPath, req.url),
	inlineSourcemaps: true
}))

app.listen(process.env.PORT || 3000)
