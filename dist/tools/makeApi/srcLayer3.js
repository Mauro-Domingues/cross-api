"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeThirdLayer;
var _fs = _interopRequireDefault(require("fs"));
var _expressNamespace = _interopRequireDefault(require("../../../dist/templates/namespaces/expressNamespace"));
var _app = _interopRequireDefault(require("../../../dist/templates/api/app"));
var _server = _interopRequireDefault(require("../../../dist/templates/api/server"));
var _domains = _interopRequireDefault(require("../../../dist/templates/assets/domains"));
var _ICacheDTO = _interopRequireDefault(require("../../../dist/templates/dtos/ICacheDTO"));
var _IListDTO = _interopRequireDefault(require("../../../dist/templates/dtos/IListDTO"));
var _IObjectDTO = _interopRequireDefault(require("../../../dist/templates/dtos/IObjectDTO"));
var _IResponseDTO = _interopRequireDefault(require("../../../dist/templates/dtos/IResponseDTO"));
var _routes = _interopRequireDefault(require("../../../dist/templates/index/routes"));
var _rateLimiter = _interopRequireDefault(require("../../../dist/templates/middlewares/rateLimiter"));
var _decimalAdjust = _interopRequireDefault(require("../../../dist/templates/utils/decimalAdjust"));
var _domains2 = _interopRequireDefault(require("../../../dist/templates/utils/domains"));
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeThirdLayer() {
  if (!_fs.default.existsSync('src/@global/express.d.ts')) {
    _fs.default.appendFile('src/@global/express.d.ts', (0, _expressNamespace.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/@global/express.d.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/@global/express.d.ts', (0, _expressNamespace.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- express.d.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/@global/ICacheDTO.d.ts')) {
    _fs.default.appendFile('src/@global/ICacheDTO.d.ts', (0, _ICacheDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/@global/ICacheDTO.d.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/@global/ICacheDTO.d.ts', (0, _ICacheDTO.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- ICacheDTO.d.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/@global/IListDTO.d.ts')) {
    _fs.default.appendFile('src/@global/IListDTO.d.ts', (0, _IListDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/@global/IListDTO.d.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/@global/IListDTO.d.ts', (0, _IListDTO.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- IListDTO.d.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/@global/IObjectDTO.d.ts')) {
    _fs.default.appendFile('src/@global/IObjectDTO.d.ts', (0, _IObjectDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/@global/IObjectDTO.d.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/@global/IObjectDTO.d.ts', (0, _IObjectDTO.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- IObjectDTO.d.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/@global/IResponseDTO.d.ts')) {
    _fs.default.appendFile('src/@global/IResponseDTO.d.ts', (0, _IResponseDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/@global/IResponseDTO.d.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/@global/IResponseDTO.d.ts', (0, _IResponseDTO.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- IResponseDTO.d.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/assets/domains.txt')) {
    _fs.default.appendFile('src/assets/domains.txt', (0, _domains.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/assets/domains.txt', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/assets/domains.txt', (0, _domains.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- domains.txt ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/middlewares/RateLimiter.ts')) {
    _fs.default.appendFile('src/middlewares/RateLimiter.ts', (0, _rateLimiter.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/middlewares/RateLimiter.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/middlewares/RateLimiter.ts', (0, _rateLimiter.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- RateLimiter.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/routes/index.ts')) {
    _fs.default.appendFile('src/routes/index.ts', (0, _routes.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/routes/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/routes/index.ts', (0, _routes.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- routes.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/shared/app.ts')) {
    _fs.default.appendFile('src/shared/app.ts', (0, _app.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/app.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/app.ts', (0, _app.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- app.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/shared/server.ts')) {
    _fs.default.appendFile('src/shared/server.ts', (0, _server.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/server.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/server.ts', (0, _server.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- server.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/utils/decimalAdjust.ts')) {
    _fs.default.appendFile('src/utils/decimalAdjust.ts', (0, _decimalAdjust.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/utils/decimalAdjust.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/utils/decimalAdjust.ts', (0, _decimalAdjust.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- decimalAdjust.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/utils/domainsManager.ts')) {
    _fs.default.appendFile('src/utils/domainsManager.ts', (0, _domains2.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/utils/domainsManager.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/utils/domainsManager.ts', (0, _domains2.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- domainsManager.ts ${_messages.default.created}`, '\x1b[0m');
}