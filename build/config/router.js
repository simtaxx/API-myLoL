'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();
var euUrl = 'https://euw1.api.riotgames.com';
var playerIdUrl = '/lol/summoner/v4/summoners/by-name/';
var playerDataUrl = '/lol/league/v4/entries/by-summoner/';

var getUser = function getUser(username) {
  return _axios2.default.get(euUrl + playerIdUrl + username, { params: { api_key: _config.apiKey } });
};
var getUserData = function getUserData(userId) {
  return _axios2.default.get(euUrl + playerDataUrl + userId, { params: { api_key: _config.apiKey } });
};

router.get('/', function (req, res) {
  res.json({ salutation: 'hello' });
});

router.get('/player', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var username, userProfil, userId, userData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = req.query.username;
            _context.prev = 1;
            _context.next = 4;
            return getUser(username);

          case 4:
            userProfil = _context.sent;
            userId = userProfil.data.id;
            _context.next = 8;
            return getUserData(userId);

          case 8:
            userData = _context.sent;

            if (userData.data.length) {
              res.json({ data: userData.data });
            }res.json({ error: 'Sorry this user have no ranked informations' });
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](1);

            res.json(_context.t0.response.data);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

exports.default = router;
//# sourceMappingURL=router.js.map