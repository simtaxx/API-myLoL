'use strict';

require('dotenv/config');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  cors: (0, _cors2.default)(),
  port: process.env.PORT,
  apiKey: process.env.API_KEY
};
//# sourceMappingURL=config.js.map