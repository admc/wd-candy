# wd-candy, a wrapper adding awesome syntax to wd the webdriver client for node

## Update node to latest

http://nodejs.org/#download

## Install

<pre>
npm install wd
</pre>

## Authors

  - Adam Christian ([admc](http://github.com/admc))

## Usage

<pre>
var wd = require("../lib/main")
var chain = require('chain-tiny');

var b = wd.candy();

chain(function(next) {
  b.add('init', {browserName:'chrome'}, next);
})
.chain(function(res, next) {
  b.add('get', 'http://www.admc.io', next);
})
.chain(function(res, next) {
  b.add('element', ['link text', 'GitHub'], next);
})
.chain(function(res, next) {
  b.add('moveTo', [res, 0, 0], next);
})
.chain(function(res, next) {
  b.add('click', 0, next);
})
.chain(function(res, next) {
  b.add('eval', "window.location.href", next);
})
.end(function(err, res) {
  b.add('quit', null);
});
</pre>
