import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
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

export class MakeThirdLayer {
  messages;
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
    this.console = new Console();
    this.createEnvNamespace = new CreateEnvNamespace();
    this.createDecodeJwt = new CreateDecodeJwt();
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
    if (!existsSync(resolve('src', '@types', 'express.d.ts'))) {
      appendFileSync(
        resolve('src', '@types', 'express.d.ts'),
        this.createExpressNamespace.execute(),
      );
    } else {
      truncateSync(resolve('src', '@types', 'express.d.ts'));
      appendFileSync(
        resolve('src', '@types', 'express.d.ts'),
        this.createExpressNamespace.execute(),
      );
    }
    this.console.one([
      `- express.d.ts $ {this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', '@types', 'env.d.ts'))) {
      appendFileSync(
        resolve('src', '@types', 'env.d.ts'),
        this.createEnvNamespace.execute(),
      );
    } else {
      truncateSync(resolve('src', '@types', 'env.d.ts'));
      appendFileSync(
        resolve('src', '@types', 'env.d.ts'),
        this.createEnvNamespace.execute(),
      );
    }
    this.console.one([
      `- env.d.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'assets', 'domains.txt'))) {
      appendFileSync(
        resolve('src', 'assets', 'domains.txt'),
        this.createDomains.execute(),
      );
    } else {
      truncateSync(resolve('src', 'assets', 'domains.txt'));
      appendFileSync(
        resolve('src', 'assets', 'domains.txt'),
        this.createDomains.execute(),
      );
    }
    this.console.one([
      `- domains.txt ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'dtos', 'ICacheDTO.ts'))) {
      appendFileSync(
        resolve('src', 'dtos', 'ICacheDTO.ts'),
        this.createICacheDTO.execute(),
      );
    } else {
      truncateSync(resolve('src', 'dtos', 'ICacheDTO.ts'));
      appendFileSync(
        resolve('src', 'dtos', 'ICacheDTO.ts'),
        this.createICacheDTO.execute(),
      );
    }
    this.console.one([
      `- ICacheDTO.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'dtos', 'IListDTO.ts'))) {
      appendFileSync(
        resolve('src', 'dtos', 'IListDTO.ts'),
        this.createIListDTO.execute(),
      );
    } else {
      truncateSync(resolve('src', 'dtos', 'IListDTO.ts'));
      appendFileSync(
        resolve('src', 'dtos', 'IListDTO.ts'),
        this.createIListDTO.execute(),
      );
    }
    this.console.one([
      `- IListDTO.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'dtos', 'IObjectDTO.ts'))) {
      appendFileSync(
        resolve('src', 'dtos', 'IObjectDTO.ts'),
        this.createIObjectDTO.execute(),
      );
    } else {
      truncateSync(resolve('src', 'dtos', 'IObjectDTO.ts'));
      appendFileSync(
        resolve('src', 'dtos', 'IObjectDTO.ts'),
        this.createIObjectDTO.execute(),
      );
    }
    this.console.one([
      `- IObjectDTO.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'dtos', 'IResponseDTO.ts'))) {
      appendFileSync(
        resolve('src', 'dtos', 'IResponseDTO.ts'),
        this.createIResponseDTO.execute(),
      );
    } else {
      truncateSync(resolve('src', 'dtos', 'IResponseDTO.ts'));
      appendFileSync(
        resolve('src', 'dtos', 'IResponseDTO.ts'),
        this.createIResponseDTO.execute(),
      );
    }
    this.console.one([
      `- IResponseDTO.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'middlewares', 'RateLimiter.ts'))) {
      appendFileSync(
        resolve('src', 'middlewares', 'RateLimiter.ts'),
        this.createRateLimiter.execute(),
      );
    } else {
      truncateSync(resolve('src', 'middlewares', 'RateLimiter.ts'));
      appendFileSync(
        resolve('src', 'middlewares', 'RateLimiter.ts'),
        this.createRateLimiter.execute(),
      );
    }
    this.console.one([
      `- RateLimiter.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'middlewares', 'EnsureAuthenticated.ts'))) {
      appendFileSync(
        resolve('src', 'middlewares', 'EnsureAuthenticated.ts'),
        this.createEnsureAuthenticated.execute(),
      );
    } else {
      truncateSync(resolve('src', 'middlewares', 'EnsureAuthenticated.ts'));
      appendFileSync(
        resolve('src', 'middlewares', 'EnsureAuthenticated.ts'),
        this.createEnsureAuthenticated.execute(),
      );
    }
    this.console.one([
      `- EnsureAuthenticated.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'middlewares', 'DecodeJwt.ts'))) {
      appendFileSync(
        resolve('src', 'middlewares', 'DecodeJwt.ts'),
        this.createDecodeJwt.execute(),
      );
    } else {
      truncateSync(resolve('src', 'middlewares', 'DecodeJwt.ts'));
      appendFileSync(
        resolve('src', 'middlewares', 'DecodeJwt.ts'),
        this.createDecodeJwt.execute(),
      );
    }
    this.console.one([
      `- DecodeJwt.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'routes', 'guardRouter.ts'))) {
      appendFileSync(
        resolve('src', 'routes', 'guardRouter.ts'),
        this.createGuard.execute(),
      );
    } else {
      truncateSync(resolve('src', 'routes', 'guardRouter.ts'));
      appendFileSync(
        resolve('src', 'routes', 'guardRouter.ts'),
        this.createGuard.execute(),
      );
    }
    this.console.one([
      `- guardRouter.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'routes', 'index.ts'))) {
      appendFileSync(
        resolve('src', 'routes', 'index.ts'),
        this.createRoutes.execute(),
      );
    } else {
      truncateSync(resolve('src', 'routes', 'index.ts'));
      appendFileSync(
        resolve('src', 'routes', 'index.ts'),
        this.createRoutes.execute(),
      );
    }
    this.console.one([
      `- routes.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'shared', 'app.ts'))) {
      appendFileSync(
        resolve('src', 'shared', 'app.ts'),
        this.createApp.execute(),
      );
    } else {
      truncateSync(resolve('src', 'shared', 'app.ts'));
      appendFileSync(
        resolve('src', 'shared', 'app.ts'),
        this.createApp.execute(),
      );
    }
    this.console.one([
      `- app.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'shared', 'server.ts'))) {
      appendFileSync(
        resolve('src', 'shared', 'server.ts'),
        this.createServer.execute(),
      );
    } else {
      truncateSync(resolve('src', 'shared', 'server.ts'));
      appendFileSync(
        resolve('src', 'shared', 'server.ts'),
        this.createServer.execute(),
      );
    }
    this.console.one([
      `- server.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'utils', 'decimalAdjust.ts'))) {
      appendFileSync(
        resolve('src', 'utils', 'decimalAdjust.ts'),
        this.createDecimaAdjust.execute(),
      );
    } else {
      truncateSync(resolve('src', 'utils', 'decimalAdjust.ts'));
      appendFileSync(
        resolve('src', 'utils', 'decimalAdjust.ts'),
        this.createDecimaAdjust.execute(),
      );
    }
    this.console.one([
      `- decimalAdjust.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'utils', 'domainsManager.ts'))) {
      appendFileSync(
        resolve('src', 'utils', 'domainsManager.ts'),
        this.createDomainsManager.execute(),
      );
    } else {
      truncateSync(resolve('src', 'utils', 'domainsManager.ts'));
      appendFileSync(
        resolve('src', 'utils', 'domainsManager.ts'),
        this.createDomainsManager.execute(),
      );
    }
    this.console.one([
      `- domainsManager.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'utils', 'errorLog.ts'))) {
      appendFileSync(
        resolve('src', 'utils', 'errorLog.ts'),
        this.createErrorLog.execute(),
      );
    } else {
      truncateSync(resolve('src', 'utils', 'errorLog.ts'));
      appendFileSync(
        resolve('src', 'utils', 'errorLog.ts'),
        this.createErrorLog.execute(),
      );
    }
    this.console.one([
      `- errorLog.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('src', 'utils', 'normalizeQueryLink.ts'))) {
      appendFileSync(
        resolve('src', 'utils', 'normalizeQueryLink.ts'),
        this.createNormalizeQueryLink.execute(),
      );
    } else {
      truncateSync(resolve('src', 'utils', 'normalizeQueryLink.ts'));
      appendFileSync(
        resolve('src', 'utils', 'normalizeQueryLink.ts'),
        this.createNormalizeQueryLink.execute(),
      );
    }
    this.console.one([
      `- createNormalizeQueryLink.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
