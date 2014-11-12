//TO-DO: MORE CODE

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic("public")).listen(8080);