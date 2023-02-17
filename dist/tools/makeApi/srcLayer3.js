"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeThirdLayer = makeThirdLayer;
var _fs = require("fs");
var _expressNamespace = require("../../../dist/templates/types/expressNamespace");
var _app = require("../../../dist/templates/api/app");
var _server = require("../../../dist/templates/api/server");
var _domains = require("../../../dist/templates/assets/domains");
var _ICacheDTO = require("../../../dist/templates/dtos/ICacheDTO");
var _IListDTO = require("../../../dist/templates/dtos/IListDTO");
var _IObjectDTO = require("../../../dist/templates/dtos/IObjectDTO");
var _IResponseDTO = require("../../../dist/templates/dtos/IResponseDTO");
var _routes = require("../../../dist/templates/index/routes");
var _rateLimiter = require("../../../dist/templates/middlewares/rateLimiter");
var _decimalAdjust = require("../../../dist/templates/utils/decimalAdjust");
var _domains2 = require("../../../dist/templates/utils/domains");
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _ensureAuthenticated = require("../../../dist/templates/middlewares/ensureAuthenticated");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeThirdLayer() {
  if (!(0, _fs.existsSync)('src/@types/express.d.ts')) {
    (0, _fs.appendFile)('src/@types/express.d.ts', (0, _expressNamespace.createExpressNamespace)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/@types/express.d.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/@types/express.d.ts', (0, _expressNamespace.createExpressNamespace)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- express.d.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/assets/domains.txt')) {
    (0, _fs.appendFile)('src/assets/domains.txt', (0, _domains.createDomains)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/assets/domains.txt', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/assets/domains.txt', (0, _domains.createDomains)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- domains.txt ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/dtos/ICacheDTO.ts')) {
    (0, _fs.appendFile)('src/dtos/ICacheDTO.ts', (0, _ICacheDTO.createICacheDTO)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/dtos/ICacheDTO.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/dtos/ICacheDTO.ts', (0, _ICacheDTO.createICacheDTO)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- ICacheDTO.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/dtos/IListDTO.ts')) {
    (0, _fs.appendFile)('src/dtos/IListDTO.ts', (0, _IListDTO.createIListDTO)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/dtos/IListDTO.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/dtos/IListDTO.ts', (0, _IListDTO.createIListDTO)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- IListDTO.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/dtos/IObjectDTO.ts')) {
    (0, _fs.appendFile)('src/dtos/IObjectDTO.ts', (0, _IObjectDTO.createIObjectDTO)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/dtos/IObjectDTO.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/dtos/IObjectDTO.ts', (0, _IObjectDTO.createIObjectDTO)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- IObjectDTO.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/dtos/IResponseDTO.ts')) {
    (0, _fs.appendFile)('src/dtos/IResponseDTO.ts', (0, _IResponseDTO.createIResponseDTO)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/dtos/IResponseDTO.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/dtos/IResponseDTO.ts', (0, _IResponseDTO.createIResponseDTO)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- IResponseDTO.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/middlewares/RateLimiter.ts')) {
    (0, _fs.appendFile)('src/middlewares/RateLimiter.ts', (0, _rateLimiter.createRateLimiter)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/middlewares/RateLimiter.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/middlewares/RateLimiter.ts', (0, _rateLimiter.createRateLimiter)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- RateLimiter.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/middlewares/EnsureAuthenticated.ts')) {
    (0, _fs.appendFile)('src/middlewares/EnsureAuthenticated.ts', (0, _ensureAuthenticated.createEnsureAuthenticated)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/middlewares/EnsureAuthenticated.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/middlewares/EnsureAuthenticated.ts', (0, _ensureAuthenticated.createEnsureAuthenticated)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- RateLimiter.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/routes/index.ts')) {
    (0, _fs.appendFile)('src/routes/index.ts', (0, _routes.createRoutes)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/routes/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/routes/index.ts', (0, _routes.createRoutes)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- routes.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/shared/app.ts')) {
    (0, _fs.appendFile)('src/shared/app.ts', (0, _app.createApp)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/app.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/app.ts', (0, _app.createApp)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- app.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/shared/server.ts')) {
    (0, _fs.appendFile)('src/shared/server.ts', (0, _server.createServer)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/server.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/server.ts', (0, _server.createServer)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- server.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/utils/decimalAdjust.ts')) {
    (0, _fs.appendFile)('src/utils/decimalAdjust.ts', (0, _decimalAdjust.createDecimaAdjust)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/utils/decimalAdjust.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/utils/decimalAdjust.ts', (0, _decimalAdjust.createDecimaAdjust)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- decimalAdjust.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/utils/domainsManager.ts')) {
    (0, _fs.appendFile)('src/utils/domainsManager.ts', (0, _domains2.createDomainsManager)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/utils/domainsManager.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/utils/domainsManager.ts', (0, _domains2.createDomainsManager)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- domainsManager.ts ${_messages.default.created}`, '\x1b[0m');
}