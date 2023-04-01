import { appendFileSync, existsSync, truncateSync } from 'fs';
import { CreateExpressNamespace } from '@templates/types/expressNamespace';
import { CreateApp } from '@templates/api/app';
import { CreateServer } from '@templates/api/server';
import { CreateDomains } from '@templates/assets/domains';
import { CreateICacheDTO } from '@templates/dtos/ICacheDTO';
import { CreateIListDTO } from '@templates/dtos/IListDTO';
import { CreateIObjectDTO } from '@templates/dtos/IObjectDTO';
import { CreateIResponseDTO } from '@templates/dtos/IResponseDTO';
import { CreateRoutes } from '@templates/index/routes';
import { CreateRateLimiter } from '@templates/middlewares/rateLimiter';
import { CreateDecimaAdjust } from '@templates/utils/decimalAdjust';
import { CreateDomainsManager } from '@templates/utils/domains';
import { IMessagesDTO, Messages } from '@tools/messages';
import { CreateEnsureAuthenticated } from '@templates/middlewares/ensureAuthenticated';
import { CreateEnvNamespace } from '@templates/types/envNamespace';
import { CreateNormalizeQueryLink } from '@templates/utils/normalizeQueryLink';
import { resolve } from 'path';
import { CreateDecodeJwt } from '@templates/middlewares/decodeJwt';
import { CreateGuard } from '@templates/index/guard';

export class MakeThirdLayer {
  private messages: IMessagesDTO;
  private createEnvNamespace: CreateEnvNamespace;
  private createEnsureAuthenticated: CreateEnsureAuthenticated;
  private createDomainsManager: CreateDomainsManager;
  private createNormalizeQueryLink: CreateNormalizeQueryLink;
  private createDecimaAdjust: CreateDecimaAdjust;
  private createRateLimiter: CreateRateLimiter;
  private createDecodeJwt: CreateDecodeJwt
  private createGuard: CreateGuard;
  private createRoutes: CreateRoutes;
  private createIResponseDTO: CreateIResponseDTO;
  private createIObjectDTO: CreateIObjectDTO;
  private createIListDTO: CreateIListDTO;
  private createICacheDTO: CreateICacheDTO;
  private createDomains: CreateDomains;
  private createServer: CreateServer;
  private createApp: CreateApp;
  private createExpressNamespace: CreateExpressNamespace;

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

  public async execute(): Promise<void> {
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
    if (!existsSync(resolve('src', 'utils', 'createNormalizeQueryLink.ts'))) {
      appendFileSync(
        resolve('src', 'utils', 'createNormalizeQueryLink.ts'),
        this.createNormalizeQueryLink.execute(),
      );
    } else {
      truncateSync(resolve('src', 'utils', 'createNormalizeQueryLink.ts'));
      appendFileSync(
        resolve('src', 'utils', 'createNormalizeQueryLink.ts'),
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
