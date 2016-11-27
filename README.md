How it works
============

There is two use cases dist and serve

Dist is as usual just making compiled, compressed files inside dist folder which then may be put somewhere like S3

Serve is on other hand may run as stand alone server which will make same things on the fly

The main idea behin this is not to have manually run any kind of gulp watch to work with assets

Just point your site to this one in development and to s3 in production and you are ready to go

Requirements
============

[iisnode](https://github.com/tjanczuk/iisnode) is main requirement here it allow you to run node app under iis

To get up and running just [download](https://github.com/tjanczuk/iisnode/releases) latest available `iisnode-full-vX.X.X-x64.msi` and install it as next, next, next, finish - thats all you are ready to go

Base
====

If you want to run app in subfolder you need add it to all `app.use()` calls like so:

```
app.use('/assets', browserify())
app.use('/assets', sass())
app.use('/assets', postcss())
```

If app will run in root ommit it like so:

```
app.use(browserify())
app.use(sass())
app.use(postcss())
```

In case of sub folder app may work both as virtual directory and as sub app

Web config stays the same in either case




Packages
========

**Dist related**

* gulp
* gulp-autoprefixer
* gulp-browserify
* gulp-cssnano
* gulp-sass
* gulp-sourcemaps
* gulp-uglify

**Dev server**

* browserify-middleware
* express
* node-sass-middleware
* postcss-middleware

**Commons**

* autoprefixer
* babelify
* babel-core
* babel-preset-es2015
* babel-preset-stage-0
