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
import messages from '@tools/messages';
import { CreateEnsureAuthenticated } from '@templates/middlewares/ensureAuthenticated';
import { CreateEnvNamespace } from '@templates/types/envNamespace';
import { CreateNormalizeQueryLink } from '@templates/utils/normalizeQueryLink';

export class MakeThirdLayer {
  private messages: typeof messages;
  private createEnvNamespace: CreateEnvNamespace;
  private createEnsureAuthenticated: CreateEnsureAuthenticated;
  private createDomainsManager: CreateDomainsManager;
  private createNormalizeQueryLink: CreateNormalizeQueryLink;
  private createDecimaAdjust: CreateDecimaAdjust;
  private createRateLimiter: CreateRateLimiter;
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
    this.messages = messages;
    this.createEnvNamespace = new CreateEnvNamespace();
    this.createEnsureAuthenticated = new CreateEnsureAuthenticated();
    this.createNormalizeQueryLink = new CreateNormalizeQueryLink();
    this.createDomainsManager = new CreateDomainsManager();
    this.createDecimaAdjust = new CreateDecimaAdjust();
    this.createRateLimiter = new CreateRateLimiter();
    this.createRoutes = new CreateRoutes();
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
    if (!existsSync('src/@types/express.d.ts')) {
      appendFileSync(
        'src/@types/express.d.ts',
        this.createExpressNamespace.execute(),
      );
    } else {
      truncateSync('src/@types/express.d.ts');
      appendFileSync(
        'src/@types/express.d.ts',
        this.createExpressNamespace.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- express.d.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/@types/env.d.ts')) {
      appendFileSync('src/@types/env.d.ts', this.createEnvNamespace.execute());
    } else {
      truncateSync('src/@types/env.d.ts');
      appendFileSync('src/@types/env.d.ts', this.createEnvNamespace.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- env.d.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/assets/domains.txt')) {
      appendFileSync('src/assets/domains.txt', this.createDomains.execute());
    } else {
      truncateSync('src/assets/domains.txt');
      appendFileSync('src/assets/domains.txt', this.createDomains.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- domains.txt ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/dtos/ICacheDTO.ts')) {
      appendFileSync('src/dtos/ICacheDTO.ts', this.createICacheDTO.execute());
    } else {
      truncateSync('src/dtos/ICacheDTO.ts');
      appendFileSync('src/dtos/ICacheDTO.ts', this.createICacheDTO.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- ICacheDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/dtos/IListDTO.ts')) {
      appendFileSync('src/dtos/IListDTO.ts', this.createIListDTO.execute());
    } else {
      truncateSync('src/dtos/IListDTO.ts');
      appendFileSync('src/dtos/IListDTO.ts', this.createIListDTO.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- IListDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/dtos/IObjectDTO.ts')) {
      appendFileSync('src/dtos/IObjectDTO.ts', this.createIObjectDTO.execute());
    } else {
      truncateSync('src/dtos/IObjectDTO.ts');
      appendFileSync('src/dtos/IObjectDTO.ts', this.createIObjectDTO.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- IObjectDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/dtos/IResponseDTO.ts')) {
      appendFileSync(
        'src/dtos/IResponseDTO.ts',
        this.createIResponseDTO.execute(),
      );
    } else {
      truncateSync('src/dtos/IResponseDTO.ts');
      appendFileSync(
        'src/dtos/IResponseDTO.ts',
        this.createIResponseDTO.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- IResponseDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/middlewares/RateLimiter.ts')) {
      appendFileSync(
        'src/middlewares/RateLimiter.ts',
        this.createRateLimiter.execute(),
      );
    } else {
      truncateSync('src/middlewares/RateLimiter.ts');
      appendFileSync(
        'src/middlewares/RateLimiter.ts',
        this.createRateLimiter.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- RateLimiter.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/middlewares/EnsureAuthenticated.ts')) {
      appendFileSync(
        'src/middlewares/EnsureAuthenticated.ts',
        this.createEnsureAuthenticated.execute(),
      );
    } else {
      truncateSync('src/middlewares/EnsureAuthenticated.ts');
      appendFileSync(
        'src/middlewares/EnsureAuthenticated.ts',
        this.createEnsureAuthenticated.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- RateLimiter.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/routes/index.ts')) {
      appendFileSync('src/routes/index.ts', this.createRoutes.execute());
    } else {
      truncateSync('src/routes/index.ts');
      appendFileSync('src/routes/index.ts', this.createRoutes.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- routes.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/shared/app.ts')) {
      appendFileSync('src/shared/app.ts', this.createApp.execute());
    } else {
      truncateSync('src/shared/app.ts');
      appendFileSync('src/shared/app.ts', this.createApp.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- app.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/shared/server.ts')) {
      appendFileSync('src/shared/server.ts', this.createServer.execute());
    } else {
      truncateSync('src/shared/server.ts');
      appendFileSync('src/shared/server.ts', this.createServer.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- server.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/decimalAdjust.ts')) {
      appendFileSync(
        'src/utils/decimalAdjust.ts',
        this.createDecimaAdjust.execute(),
      );
    } else {
      truncateSync('src/utils/decimalAdjust.ts');
      appendFileSync(
        'src/utils/decimalAdjust.ts',
        this.createDecimaAdjust.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- decimalAdjust.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/domainsManager.ts')) {
      appendFileSync(
        'src/utils/domainsManager.ts',
        this.createDomainsManager.execute(),
      );
    } else {
      truncateSync('src/utils/domainsManager.ts');
      appendFileSync(
        'src/utils/domainsManager.ts',
        this.createDomainsManager.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- domainsManager.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/createNormalizeQueryLink.ts')) {
      appendFileSync(
        'src/utils/createNormalizeQueryLink.ts',
        this.createNormalizeQueryLink.execute(),
      );
    } else {
      truncateSync('src/utils/createNormalizeQueryLink.ts');
      appendFileSync(
        'src/utils/createNormalizeQueryLink.ts',
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
