'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config/config');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _router = require('./config/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import library
var app = (0, _express2.default)(); // init express

app.use(_config.cors);
app.use(_router2.default);
// Configuration du moteur de rendu
app.set("view engine", "ejs");
// Définition du dossier static du client
app.set("views", __dirname + "/www");
app.use(_express2.default.static(_path2.default.join(__dirname, "www")));

app.listen(_config.port, function () {
  console.log('the url is http://localhost:' + _config.port);
});
//# sourceMappingURL=app.js.map