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

export class MakeThirdLayer {
  messages;
  createEnvNamespace;
  createEnsureAuthenticated;
  createDomainsManager;
  createNormalizeQueryLink;
  createDecimaAdjust;
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
    this.createEnvNamespace = new CreateEnvNamespace();
    this.createDecodeJwt = new CreateDecodeJwt();
    this.createEnsureAuthenticated = new CreateEnsureAuthenticated();
    this.createNormalizeQueryLink = new CreateNormalizeQueryLink();
    this.createDomainsManager = new CreateDomainsManager();
    this.createDecimaAdjust = new CreateDecimaAdjust();
    this.createRateLimiter = new CreateRateLimiter();
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- express.d.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- env.d.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- domains.txt ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- ICacheDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- IListDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- IObjectDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- IResponseDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- RateLimiter.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- EnsureAuthenticated.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- DecodeJwt.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- guardRouter.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- routes.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- app.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- server.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- decimalAdjust.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- domainsManager.ts ${this.messages.created}`,
      '\x1b[0m',
    );
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- createNormalizeQueryLink.ts ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
