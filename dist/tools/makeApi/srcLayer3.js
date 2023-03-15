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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeThirdLayer {
  constructor() {
    this.messages = void 0;
    this.createEnvNamespace = void 0;
    this.createEnsureAuthenticated = void 0;
    this.createDomainsManager = void 0;
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
      (0, _fs.appendFile)('src/@types/express.d.ts', this.createExpressNamespace.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/@types/express.d.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/@types/express.d.ts', this.createExpressNamespace.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- express.d.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/@types/env.d.ts')) {
      (0, _fs.appendFile)('src/@types/env.d.ts', this.createEnvNamespace.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/@types/env.d.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/@types/env.d.ts', this.createEnvNamespace.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- env.d.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/assets/domains.txt')) {
      (0, _fs.appendFile)('src/assets/domains.txt', this.createDomains.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/assets/domains.txt', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/assets/domains.txt', this.createDomains.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- domains.txt ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/dtos/ICacheDTO.ts')) {
      (0, _fs.appendFile)('src/dtos/ICacheDTO.ts', this.createICacheDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/dtos/ICacheDTO.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/dtos/ICacheDTO.ts', this.createICacheDTO.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- ICacheDTO.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/dtos/IListDTO.ts')) {
      (0, _fs.appendFile)('src/dtos/IListDTO.ts', this.createIListDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/dtos/IListDTO.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/dtos/IListDTO.ts', this.createIListDTO.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- IListDTO.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/dtos/IObjectDTO.ts')) {
      (0, _fs.appendFile)('src/dtos/IObjectDTO.ts', this.createIObjectDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/dtos/IObjectDTO.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/dtos/IObjectDTO.ts', this.createIObjectDTO.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- IObjectDTO.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/dtos/IResponseDTO.ts')) {
      (0, _fs.appendFile)('src/dtos/IResponseDTO.ts', this.createIResponseDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/dtos/IResponseDTO.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/dtos/IResponseDTO.ts', this.createIResponseDTO.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- IResponseDTO.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/middlewares/RateLimiter.ts')) {
      (0, _fs.appendFile)('src/middlewares/RateLimiter.ts', this.createRateLimiter.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/middlewares/RateLimiter.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/middlewares/RateLimiter.ts', this.createRateLimiter.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- RateLimiter.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/middlewares/EnsureAuthenticated.ts')) {
      (0, _fs.appendFile)('src/middlewares/EnsureAuthenticated.ts', this.createEnsureAuthenticated.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/middlewares/EnsureAuthenticated.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/middlewares/EnsureAuthenticated.ts', this.createEnsureAuthenticated.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- RateLimiter.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/routes/index.ts')) {
      (0, _fs.appendFile)('src/routes/index.ts', this.createRoutes.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/routes/index.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/routes/index.ts', this.createRoutes.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- routes.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/shared/app.ts')) {
      (0, _fs.appendFile)('src/shared/app.ts', this.createApp.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/app.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/app.ts', this.createApp.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- app.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/shared/server.ts')) {
      (0, _fs.appendFile)('src/shared/server.ts', this.createServer.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/server.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/server.ts', this.createServer.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- server.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/decimalAdjust.ts')) {
      (0, _fs.appendFile)('src/utils/decimalAdjust.ts', this.createDecimaAdjust.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/utils/decimalAdjust.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/utils/decimalAdjust.ts', this.createDecimaAdjust.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- decimalAdjust.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/domainsManager.ts')) {
      (0, _fs.appendFile)('src/utils/domainsManager.ts', this.createDomainsManager.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/utils/domainsManager.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/utils/domainsManager.ts', this.createDomainsManager.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- domainsManager.ts ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeThirdLayer = MakeThirdLayer;