var server = require("./Server2");
var router = require("./route");

server.start(router.route);