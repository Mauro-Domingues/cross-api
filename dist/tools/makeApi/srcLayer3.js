"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeThirdLayer = void 0;
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
var _envNamespace = require("../../../dist/templates/types/envNamespace");
var _normalizeQueryLink = require("../../../dist/templates/utils/normalizeQueryLink");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeThirdLayer {
  constructor() {
    this.messages = void 0;
    this.createEnvNamespace = void 0;
    this.createEnsureAuthenticated = void 0;
    this.createDomainsManager = void 0;
    this.createNormalizeQueryLink = void 0;
    this.createDecimaAdjust = void 0;
    this.createRateLimiter = void 0;
    this.createRoutes = void 0;
    this.createIResponseDTO = void 0;
    this.createIObjectDTO = void 0;
    this.createIListDTO = void 0;
    this.createICacheDTO = void 0;
    this.createDomains = void 0;
    this.createServer = void 0;
    this.createApp = void 0;
    this.createExpressNamespace = void 0;
    this.messages = _messages.default;
    this.createEnvNamespace = new _envNamespace.CreateEnvNamespace();
    this.createEnsureAuthenticated = new _ensureAuthenticated.CreateEnsureAuthenticated();
    this.createNormalizeQueryLink = new _normalizeQueryLink.CreateNormalizeQueryLink();
    this.createDomainsManager = new _domains2.CreateDomainsManager();
    this.createDecimaAdjust = new _decimalAdjust.CreateDecimaAdjust();
    this.createRateLimiter = new _rateLimiter.CreateRateLimiter();
    this.createRoutes = new _routes.CreateRoutes();
    this.createIResponseDTO = new _IResponseDTO.CreateIResponseDTO();
    this.createIObjectDTO = new _IObjectDTO.CreateIObjectDTO();
    this.createIListDTO = new _IListDTO.CreateIListDTO();
    this.createICacheDTO = new _ICacheDTO.CreateICacheDTO();
    this.createDomains = new _domains.CreateDomains();
    this.createServer = new _server.CreateServer();
    this.createApp = new _app.CreateApp();
    this.createExpressNamespace = new _expressNamespace.CreateExpressNamespace();
  }
  async execute() {
    if (!(0, _fs.existsSync)('src/@types/express.d.ts')) {
      (0, _fs.appendFileSync)('src/@types/express.d.ts', this.createExpressNamespace.execute());
    } else {
      (0, _fs.truncateSync)('src/@types/express.d.ts');
      (0, _fs.appendFileSync)('src/@types/express.d.ts', this.createExpressNamespace.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- express.d.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/@types/env.d.ts')) {
      (0, _fs.appendFileSync)('src/@types/env.d.ts', this.createEnvNamespace.execute());
    } else {
      (0, _fs.truncateSync)('src/@types/env.d.ts');
      (0, _fs.appendFileSync)('src/@types/env.d.ts', this.createEnvNamespace.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- env.d.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/assets/domains.txt')) {
      (0, _fs.appendFileSync)('src/assets/domains.txt', this.createDomains.execute());
    } else {
      (0, _fs.truncateSync)('src/assets/domains.txt');
      (0, _fs.appendFileSync)('src/assets/domains.txt', this.createDomains.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- domains.txt ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/dtos/ICacheDTO.ts')) {
      (0, _fs.appendFileSync)('src/dtos/ICacheDTO.ts', this.createICacheDTO.execute());
    } else {
      (0, _fs.truncateSync)('src/dtos/ICacheDTO.ts');
      (0, _fs.appendFileSync)('src/dtos/ICacheDTO.ts', this.createICacheDTO.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- ICacheDTO.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/dtos/IListDTO.ts')) {
      (0, _fs.appendFileSync)('src/dtos/IListDTO.ts', this.createIListDTO.execute());
    } else {
      (0, _fs.truncateSync)('src/dtos/IListDTO.ts');
      (0, _fs.appendFileSync)('src/dtos/IListDTO.ts', this.createIListDTO.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- IListDTO.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/dtos/IObjectDTO.ts')) {
      (0, _fs.appendFileSync)('src/dtos/IObjectDTO.ts', this.createIObjectDTO.execute());
    } else {
      (0, _fs.truncateSync)('src/dtos/IObjectDTO.ts');
      (0, _fs.appendFileSync)('src/dtos/IObjectDTO.ts', this.createIObjectDTO.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- IObjectDTO.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/dtos/IResponseDTO.ts')) {
      (0, _fs.appendFileSync)('src/dtos/IResponseDTO.ts', this.createIResponseDTO.execute());
    } else {
      (0, _fs.truncateSync)('src/dtos/IResponseDTO.ts');
      (0, _fs.appendFileSync)('src/dtos/IResponseDTO.ts', this.createIResponseDTO.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- IResponseDTO.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/middlewares/RateLimiter.ts')) {
      (0, _fs.appendFileSync)('src/middlewares/RateLimiter.ts', this.createRateLimiter.execute());
    } else {
      (0, _fs.truncateSync)('src/middlewares/RateLimiter.ts');
      (0, _fs.appendFileSync)('src/middlewares/RateLimiter.ts', this.createRateLimiter.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- RateLimiter.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/middlewares/EnsureAuthenticated.ts')) {
      (0, _fs.appendFileSync)('src/middlewares/EnsureAuthenticated.ts', this.createEnsureAuthenticated.execute());
    } else {
      (0, _fs.truncateSync)('src/middlewares/EnsureAuthenticated.ts');
      (0, _fs.appendFileSync)('src/middlewares/EnsureAuthenticated.ts', this.createEnsureAuthenticated.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- RateLimiter.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/routes/index.ts')) {
      (0, _fs.appendFileSync)('src/routes/index.ts', this.createRoutes.execute());
    } else {
      (0, _fs.truncateSync)('src/routes/index.ts');
      (0, _fs.appendFileSync)('src/routes/index.ts', this.createRoutes.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- routes.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/shared/app.ts')) {
      (0, _fs.appendFileSync)('src/shared/app.ts', this.createApp.execute());
    } else {
      (0, _fs.truncateSync)('src/shared/app.ts');
      (0, _fs.appendFileSync)('src/shared/app.ts', this.createApp.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- app.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/shared/server.ts')) {
      (0, _fs.appendFileSync)('src/shared/server.ts', this.createServer.execute());
    } else {
      (0, _fs.truncateSync)('src/shared/server.ts');
      (0, _fs.appendFileSync)('src/shared/server.ts', this.createServer.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- server.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/decimalAdjust.ts')) {
      (0, _fs.appendFileSync)('src/utils/decimalAdjust.ts', this.createDecimaAdjust.execute());
    } else {
      (0, _fs.truncateSync)('src/utils/decimalAdjust.ts');
      (0, _fs.appendFileSync)('src/utils/decimalAdjust.ts', this.createDecimaAdjust.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- decimalAdjust.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/domainsManager.ts')) {
      (0, _fs.appendFileSync)('src/utils/domainsManager.ts', this.createDomainsManager.execute());
    } else {
      (0, _fs.truncateSync)('src/utils/domainsManager.ts');
      (0, _fs.appendFileSync)('src/utils/domainsManager.ts', this.createDomainsManager.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- domainsManager.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/createNormalizeQueryLink.ts')) {
      (0, _fs.appendFileSync)('src/utils/createNormalizeQueryLink.ts', this.createNormalizeQueryLink.execute());
    } else {
      (0, _fs.truncateSync)('src/utils/createNormalizeQueryLink.ts');
      (0, _fs.appendFileSync)('src/utils/createNormalizeQueryLink.ts', this.createNormalizeQueryLink.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- createNormalizeQueryLink.ts ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeThirdLayer = MakeThirdLayer;