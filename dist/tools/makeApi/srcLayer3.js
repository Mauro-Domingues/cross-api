"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeThirdLayer = void 0;
const fs_1 = require("fs");
const expressNamespace_1 = require("../../templates/types/expressNamespace");
const app_1 = require("../../templates/api/app");
const server_1 = require("../../templates/api/server");
const domains_1 = require("../../templates/assets/domains");
const ICacheDTO_1 = require("../../templates/dtos/ICacheDTO");
const IListDTO_1 = require("../../templates/dtos/IListDTO");
const IObjectDTO_1 = require("../../templates/dtos/IObjectDTO");
const IResponseDTO_1 = require("../../templates/dtos/IResponseDTO");
const routes_1 = require("../../templates/index/routes");
const rateLimiter_1 = require("../../templates/middlewares/rateLimiter");
const decimalAdjust_1 = require("../../templates/utils/decimalAdjust");
const domains_2 = require("../../templates/utils/domains");
const messages_1 = require("../messages");
const ensureAuthenticated_1 = require("../../templates/middlewares/ensureAuthenticated");
const envNamespace_1 = require("../../templates/types/envNamespace");
const normalizeQueryLink_1 = require("../../templates/utils/normalizeQueryLink");
const path_1 = require("path");
const decodeJwt_1 = require("../../templates/middlewares/decodeJwt");
const guard_1 = require("../../templates/index/guard");
class MakeThirdLayer {
    constructor() {
        this.messages = new messages_1.Messages().execute();
        this.createEnvNamespace = new envNamespace_1.CreateEnvNamespace();
        this.createDecodeJwt = new decodeJwt_1.CreateDecodeJwt();
        this.createEnsureAuthenticated = new ensureAuthenticated_1.CreateEnsureAuthenticated();
        this.createNormalizeQueryLink = new normalizeQueryLink_1.CreateNormalizeQueryLink();
        this.createDomainsManager = new domains_2.CreateDomainsManager();
        this.createDecimaAdjust = new decimalAdjust_1.CreateDecimaAdjust();
        this.createRateLimiter = new rateLimiter_1.CreateRateLimiter();
        this.createRoutes = new routes_1.CreateRoutes();
        this.createGuard = new guard_1.CreateGuard();
        this.createIResponseDTO = new IResponseDTO_1.CreateIResponseDTO();
        this.createIObjectDTO = new IObjectDTO_1.CreateIObjectDTO();
        this.createIListDTO = new IListDTO_1.CreateIListDTO();
        this.createICacheDTO = new ICacheDTO_1.CreateICacheDTO();
        this.createDomains = new domains_1.CreateDomains();
        this.createServer = new server_1.CreateServer();
        this.createApp = new app_1.CreateApp();
        this.createExpressNamespace = new expressNamespace_1.CreateExpressNamespace();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', '@types', 'express.d.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', '@types', 'express.d.ts'), this.createExpressNamespace.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', '@types', 'express.d.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', '@types', 'express.d.ts'), this.createExpressNamespace.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- express.d.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', '@types', 'env.d.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', '@types', 'env.d.ts'), this.createEnvNamespace.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', '@types', 'env.d.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', '@types', 'env.d.ts'), this.createEnvNamespace.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- env.d.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'assets', 'domains.txt'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'assets', 'domains.txt'), this.createDomains.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'assets', 'domains.txt'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'assets', 'domains.txt'), this.createDomains.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- domains.txt ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'dtos', 'ICacheDTO.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'dtos', 'ICacheDTO.ts'), this.createICacheDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'dtos', 'ICacheDTO.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'dtos', 'ICacheDTO.ts'), this.createICacheDTO.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- ICacheDTO.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'dtos', 'IListDTO.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'dtos', 'IListDTO.ts'), this.createIListDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'dtos', 'IListDTO.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'dtos', 'IListDTO.ts'), this.createIListDTO.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- IListDTO.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'dtos', 'IObjectDTO.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'dtos', 'IObjectDTO.ts'), this.createIObjectDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'dtos', 'IObjectDTO.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'dtos', 'IObjectDTO.ts'), this.createIObjectDTO.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- IObjectDTO.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'dtos', 'IResponseDTO.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'dtos', 'IResponseDTO.ts'), this.createIResponseDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'dtos', 'IResponseDTO.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'dtos', 'IResponseDTO.ts'), this.createIResponseDTO.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- IResponseDTO.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'middlewares', 'RateLimiter.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'middlewares', 'RateLimiter.ts'), this.createRateLimiter.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'middlewares', 'RateLimiter.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'middlewares', 'RateLimiter.ts'), this.createRateLimiter.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- RateLimiter.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'middlewares', 'EnsureAuthenticated.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'middlewares', 'EnsureAuthenticated.ts'), this.createEnsureAuthenticated.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'middlewares', 'EnsureAuthenticated.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'middlewares', 'EnsureAuthenticated.ts'), this.createEnsureAuthenticated.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- EnsureAuthenticated.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'middlewares', 'DecodeJwt.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'middlewares', 'DecodeJwt.ts'), this.createDecodeJwt.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'middlewares', 'DecodeJwt.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'middlewares', 'DecodeJwt.ts'), this.createDecodeJwt.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- DecodeJwt.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'routes', 'guardRouter.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', 'guardRouter.ts'), this.createGuard.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'routes', 'guardRouter.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', 'guardRouter.ts'), this.createGuard.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- guardRouter.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'routes', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', 'index.ts'), this.createRoutes.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'routes', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', 'index.ts'), this.createRoutes.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- routes.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'app.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'app.ts'), this.createApp.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'app.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'app.ts'), this.createApp.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- app.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'server.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'server.ts'), this.createServer.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'server.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'server.ts'), this.createServer.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- server.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'decimalAdjust.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'decimalAdjust.ts'), this.createDecimaAdjust.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'utils', 'decimalAdjust.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'decimalAdjust.ts'), this.createDecimaAdjust.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- decimalAdjust.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'domainsManager.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'domainsManager.ts'), this.createDomainsManager.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'utils', 'domainsManager.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'domainsManager.ts'), this.createDomainsManager.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- domainsManager.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'normalizeQueryLink.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'normalizeQueryLink.ts'), this.createNormalizeQueryLink.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'utils', 'normalizeQueryLink.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'normalizeQueryLink.ts'), this.createNormalizeQueryLink.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- createNormalizeQueryLink.ts ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeThirdLayer = MakeThirdLayer;
