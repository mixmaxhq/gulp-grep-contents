var gutil = require('gulp-util');
var through = require('through2');

var grep = function(regex, options) {
  options = options || {};

  var restoreStream = through.obj();

  return through.obj(function(file, encoding, callback) {
    if (file.isStream()) {
      throw new gutil.PluginError('Stream not supported');
    }

    var match = regex.test(String(file.contents))

    var invert = !!options.invert;
    if (invert ^ match) {
      callback(null, file);
      return;
    }

    restoreStream.write(file);
    callback();
  });
}

module.exports = grep;
