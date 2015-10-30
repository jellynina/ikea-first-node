# ikea-first-node
My very first node package

列一下常用的框架/工具

* 使用~~fire.app~~ *說再見* 

### plugs

* [bootstrap-sass]()
* fontawsome

### 自己做

* toggle radio set


## Work flow

建立`package.json`

```
$ npm init
```

```
$ bower init
$ bower install {package}
```


# SASS auto running with grunt

> 2015-10-15, fire.app 不再維護只好自立自強

##1. 專案安裝grunt
```
$ npm install grunt --save-dev
```

##2. 建立`Gruntfile.js`

```js
module.exports = function(grunt) {
// Project configuration.
grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   // Tasks to go below here
});
// Load plugins here
// Default task(s).
grunt.registerTask('default', []);
};
```

##3. 安裝grunt compass
[grunt-contrib-compass](https://www.npmjs.com/package/grunt-contrib-compass)


# NodeJS Basic Note
a [Treehouse](http://teamtreehouse.com/library/nodejs-basics)'s course.

## module

```js
module.exports.get = get;
```
* [process](https://nodejs.org/api/process.html) is a global object we can access things like the current version of node and arguments passed in as a command line.
* JS: [array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

###Perfecting the Application

1. Create user friendly error messages
2. Make the first argument the topic area
	1. e.g. `node app.js Ruby chalkers davemcfarland joykesten2`
	2. Extract all printing functions in to a `printer.js` file and import it in to your `profile.js` file.
3. Other command line app ideas
	1. A weather app
		e.g. `node weather.js 90210`
	2. A stock app
		e.g. `node stocks.js AAPL`

# HomeWork
##Extra Credit
If you're done adding additional functionality to this project, why not create a command line application that takes a Zip Code or Postal Code and it retrieves the forecast for today.

For example:

```
node forecast.js 90210
```
[Forecast.io](http://forecast.io/#/f/25.0392,121.5250) has an API you could use.




# Treehouse Note: npm Basic

## What is npm?

`npm`: A JavaScript Package Manager in NodeJS.

##Choosing a Package

> There are a number of indicators that you can use to determine which package to use.

1. Popularity on npm – the number of downloads
2. Release Date – the more recent the better
3. Number of Releases – the more frequent the better
4. Passing Tests - if there's tests passing
5. Number of Open Issues – the less the better
6. Popularity on GitHub – The more Stars, Forks and Watches the better
7. Number of Contributors on GitHub – more eyes on the code the better











