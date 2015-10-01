# ikea-first-node
My very first node package

列一下常用的框架/工具

* 使用[fire.app]()

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


> 然後我就不知道該怎麼辦了

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

