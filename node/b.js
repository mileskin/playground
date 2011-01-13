exports.b = function() {
  console.log('b')
}

var fs = require('fs')
var filename = __dirname + '/c.js';
var src = fs.readFileSync(filename);
process.compile(src, filename)
