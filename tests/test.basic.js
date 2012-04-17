var wd = require("../lib/main")
var go = require('chain-tiny');

var b = wd.candy();

go(function(next) {
  b.add('init', {browserName:'chrome'}, next);
})
.go(function(res, next) {
  b.add('get', 'http://www.admc.io', next);
})
.go(function(res, next) {
  b.add('element', ['link text', 'GitHub'], next);
})
.go(function(res, next) {
  b.add('moveTo', [res, 0, 0], next);
})
.go(function(res, next) {
  b.add('click', 0, next);
})
.go(function(res, next) {
  b.add('eval', "window.location.href", next);
})
.end(function(err, res) {
  b.add('quit', null);
});
