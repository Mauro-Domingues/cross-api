import { CreateExpressNamespace } from '../../templates/types/expressNamespace.js';
import { CreateApp } from '../../templates/api/app.js';
import { CreateServer } from '../../templates/api/server.js';
import { CreateDomains } from '../../templates/assets/domains.js';
import { CreateICacheDTO } from '../../templates/dtos/ICacheDTO.js';
import { CreateIListDTO } from '../../templates/dtos/IListDTO.js';
import { CreateIObjectDTO } from '../../templates/dtos/IObjectDTO.js';
import { CreateIResponseDTO } from '../../templates/dtos/IResponseDTO.js';
import { CreateRoutes } from '../../templates/index/routes.js';
import { CreateRateLimiter } from '../../templates/middlewares/rateLimiter.js';
import { CreateDecimaAdjust } from '../../templates/utils/decimalAdjust.js';
import { CreateDomainsManager } from '../../templates/utils/domains.js';
import { Messages } from '../messages.js';
import { CreateEnsureAuthenticated } from '../../templates/middlewares/ensureAuthenticated.js';
import { CreateEnvNamespace } from '../../templates/types/envNamespace.js';
import { CreateNormalizeQueryLink } from '../../templates/utils/normalizeQueryLink.js';
import { CreateDecodeJwt } from '../../templates/middlewares/decodeJwt.js';
import { CreateGuard } from '../../templates/index/guard.js';
import { CreateErrorLog } from '../../templates/utils/errorLog.js';
import { Console } from '../console.js';
import { FileManager } from '../fileManager.js';
import { CreateKeys } from '../../templates/types/keys.js';
export class MakeThirdLayer {
    messages;
    fileManager;
    console;
    createEnvNamespace;
    createEnsureAuthenticated;
    createDomainsManager;
    createNormalizeQueryLink;
    createDecimaAdjust;
    createErrorLog;
    createRateLimiter;
    createDecodeJwt;
    createGuard;
    createKeys;
    createRoutes;
    createIResponseDTO;
    createIObjectDTO;
    createIListDTO;
    createICacheDTO;
    createDomains;
    createServer;
    createApp;
    createExpressNamespace;
    constructor() {
        this.messages = new Messages().execute();
        this.fileManager = new FileManager();
        this.console = new Console();
        this.createEnvNamespace = new CreateEnvNamespace();
        this.createDecodeJwt = new CreateDecodeJwt();
        this.createKeys = new CreateKeys();
        this.createEnsureAuthenticated = new CreateEnsureAuthenticated();
        this.createNormalizeQueryLink = new CreateNormalizeQueryLink();
        this.createDomainsManager = new CreateDomainsManager();
        this.createDecimaAdjust = new CreateDecimaAdjust();
        this.createRateLimiter = new CreateRateLimiter();
        this.createErrorLog = new CreateErrorLog();
        this.createRoutes = new CreateRoutes();
        this.createGuard = new CreateGuard();
        this.createIResponseDTO = new CreateIResponseDTO();
        this.createIObjectDTO = new CreateIObjectDTO();
        this.createIListDTO = new CreateIListDTO();
        this.createICacheDTO = new CreateICacheDTO();
        this.createDomains = new CreateDomains();
        this.createServer = new CreateServer();
        this.createApp = new CreateApp();
        this.createExpressNamespace = new CreateExpressNamespace();
    }
    async execute() {
        if (!this.fileManager.checkIfExists(['src', '@types', 'express.d.ts'])) {
            await this.fileManager.createFile(['src', '@types', 'express.d.ts'], this.createExpressNamespace.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', '@types', 'express.d.ts']);
            await this.fileManager.createFile(['src', '@types', 'express.d.ts'], this.createExpressNamespace.execute());
        }
        this.console.one([
            `- express.d.ts $ {this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', '@types', 'env.d.ts'])) {
            await this.fileManager.createFile(['src', '@types', 'env.d.ts'], this.createEnvNamespace.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', '@types', 'env.d.ts']);
            await this.fileManager.createFile(['src', '@types', 'env.d.ts'], this.createEnvNamespace.execute());
        }
        this.console.one([
            `- env.d.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', '@types', 'keys.d.ts'])) {
            await this.fileManager.createFile(['src', '@types', 'keys.d.ts'], this.createKeys.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', '@types', 'keys.d.ts']);
            await this.fileManager.createFile(['src', '@types', 'keys.d.ts'], this.createKeys.execute());
        }
        this.console.one([
            `- keys.d.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'assets', 'domains.txt'])) {
            await this.fileManager.createFile(['src', 'assets', 'domains.txt'], this.createDomains.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'assets', 'domains.txt']);
            await this.fileManager.createFile(['src', 'assets', 'domains.txt'], this.createDomains.execute());
        }
        this.console.one([
            `- domains.txt ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'dtos', 'ICacheDTO.ts'])) {
            await this.fileManager.createFile(['src', 'dtos', 'ICacheDTO.ts'], this.createICacheDTO.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'dtos', 'ICacheDTO.ts']);
            await this.fileManager.createFile(['src', 'dtos', 'ICacheDTO.ts'], this.createICacheDTO.execute());
        }
        this.console.one([
            `- ICacheDTO.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'dtos', 'IListDTO.ts'])) {
            await this.fileManager.createFile(['src', 'dtos', 'IListDTO.ts'], this.createIListDTO.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'dtos', 'IListDTO.ts']);
            await this.fileManager.createFile(['src', 'dtos', 'IListDTO.ts'], this.createIListDTO.execute());
        }
        this.console.one([
            `- IListDTO.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'dtos', 'IObjectDTO.ts'])) {
            await this.fileManager.createFile(['src', 'dtos', 'IObjectDTO.ts'], this.createIObjectDTO.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'dtos', 'IObjectDTO.ts']);
            await this.fileManager.createFile(['src', 'dtos', 'IObjectDTO.ts'], this.createIObjectDTO.execute());
        }
        this.console.one([
            `- IObjectDTO.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'dtos', 'IResponseDTO.ts'])) {
            await this.fileManager.createFile(['src', 'dtos', 'IResponseDTO.ts'], this.createIResponseDTO.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'dtos', 'IResponseDTO.ts']);
            await this.fileManager.createFile(['src', 'dtos', 'IResponseDTO.ts'], this.createIResponseDTO.execute());
        }
        this.console.one([
            `- IResponseDTO.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'middlewares', 'RateLimiter.ts'])) {
            await this.fileManager.createFile(['src', 'middlewares', 'RateLimiter.ts'], this.createRateLimiter.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'middlewares',
                'RateLimiter.ts',
            ]);
            await this.fileManager.createFile(['src', 'middlewares', 'RateLimiter.ts'], this.createRateLimiter.execute());
        }
        this.console.one([
            `- RateLimiter.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists([
            'src',
            'middlewares',
            'EnsureAuthenticated.ts',
        ])) {
            await this.fileManager.createFile(['src', 'middlewares', 'EnsureAuthenticated.ts'], this.createEnsureAuthenticated.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'middlewares',
                'EnsureAuthenticated.ts',
            ]);
            await this.fileManager.createFile(['src', 'middlewares', 'EnsureAuthenticated.ts'], this.createEnsureAuthenticated.execute());
        }
        this.console.one([
            `- EnsureAuthenticated.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'middlewares', 'DecodeJwt.ts'])) {
            await this.fileManager.createFile(['src', 'middlewares', 'DecodeJwt.ts'], this.createDecodeJwt.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'middlewares',
                'DecodeJwt.ts',
            ]);
            await this.fileManager.createFile(['src', 'middlewares', 'DecodeJwt.ts'], this.createDecodeJwt.execute());
        }
        this.console.one([
            `- DecodeJwt.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'routes', 'guardRouter.ts'])) {
            await this.fileManager.createFile(['src', 'routes', 'guardRouter.ts'], this.createGuard.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'routes', 'guardRouter.ts']);
            await this.fileManager.createFile(['src', 'routes', 'guardRouter.ts'], this.createGuard.execute());
        }
        this.console.one([
            `- guardRouter.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'routes', 'index.ts'])) {
            await this.fileManager.createFile(['src', 'routes', 'index.ts'], this.createRoutes.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'routes', 'index.ts']);
            await this.fileManager.createFile(['src', 'routes', 'index.ts'], this.createRoutes.execute());
        }
        this.console.one([
            `- routes.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'shared', 'app.ts'])) {
            await this.fileManager.createFile(['src', 'shared', 'app.ts'], this.createApp.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'shared', 'app.ts']);
            await this.fileManager.createFile(['src', 'shared', 'app.ts'], this.createApp.execute());
        }
        this.console.one([
            `- app.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'shared', 'server.ts'])) {
            await this.fileManager.createFile(['src', 'shared', 'server.ts'], this.createServer.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'shared', 'server.ts']);
            await this.fileManager.createFile(['src', 'shared', 'server.ts'], this.createServer.execute());
        }
        this.console.one([
            `- server.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'utils', 'decimalAdjust.ts'])) {
            await this.fileManager.createFile(['src', 'utils', 'decimalAdjust.ts'], this.createDecimaAdjust.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'utils', 'decimalAdjust.ts']);
            await this.fileManager.createFile(['src', 'utils', 'decimalAdjust.ts'], this.createDecimaAdjust.execute());
        }
        this.console.one([
            `- decimalAdjust.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'utils', 'domainsManager.ts'])) {
            await this.fileManager.createFile(['src', 'utils', 'domainsManager.ts'], this.createDomainsManager.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'utils',
                'domainsManager.ts',
            ]);
            await this.fileManager.createFile(['src', 'utils', 'domainsManager.ts'], this.createDomainsManager.execute());
        }
        this.console.one([
            `- domainsManager.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'utils', 'errorLog.ts'])) {
            await this.fileManager.createFile(['src', 'utils', 'errorLog.ts'], this.createErrorLog.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'utils', 'errorLog.ts']);
            await this.fileManager.createFile(['src', 'utils', 'errorLog.ts'], this.createErrorLog.execute());
        }
        this.console.one([
            `- errorLog.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'utils', 'normalizeQueryLink.ts'])) {
            await this.fileManager.createFile(['src', 'utils', 'normalizeQueryLink.ts'], this.createNormalizeQueryLink.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'utils',
                'normalizeQueryLink.ts',
            ]);
            await this.fileManager.createFile(['src', 'utils', 'normalizeQueryLink.ts'], this.createNormalizeQueryLink.execute());
        }
        return this.console.one([
            `- createNormalizeQueryLink.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
    }
}
