var webdriver = require('wd');

exports.candy = function(host, port, username, accessKey) {
  var wd = new webdriver.remote(host, port, username, accessKey);
  wd.add = function(method, arg, next) {
    if (method == "init") {
      console.log('\x1b[31mDriving the Webs...\x1b[0m\n');
    }
    if (method == "quit") {
      console.log('\n\x1b[31mShutting down teh WebDrives.\x1b[0m\n');
    }
    var _this = this;
    var cb = function(err, res) {
      console.log(' \x1b[36m'+method+'\x1b[0m'+ ' : '+ JSON.stringify(arg) + ' - \x1b[32m%s\x1b[0m', JSON.stringify(res));
      if (next) { next(null, res); }
    }; 
    if (arg instanceof Array) {
      arg.push(cb);
      this[method].apply(this, arg);
    }
    else { this[method].call(this, arg, cb); }
  };
  return wd;
}
