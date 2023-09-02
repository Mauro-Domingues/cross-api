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
import { CreateEnsureAuthenticated } from '@templates/middlewares/ensureAuthenticated';
import { CreateEnvNamespace } from '@templates/types/envNamespace';
import { CreateNormalizeQueryLink } from '@templates/utils/normalizeQueryLink';
import { CreateDecodeJwt } from '@templates/middlewares/decodeJwt';
import { CreateGuard } from '@templates/index/guard';
import { CreateErrorLog } from '@templates/utils/errorLog';
import { FileManager } from '@tools/fileManager';
import { CreateKeys } from '@templates/types/keys';
import { CreateIExceptionDTO } from '@templates/dtos/IExceptionDTO';
import { CreateParseBoolean } from '@templates/middlewares/parseBoolean';

export class MakeThirdLayer {
  private readonly fileManager: FileManager;
  private readonly createEnvNamespace: CreateEnvNamespace;
  private readonly createEnsureAuthenticated: CreateEnsureAuthenticated;
  private readonly createDomainsManager: CreateDomainsManager;
  private readonly createNormalizeQueryLink: CreateNormalizeQueryLink;
  private readonly createDecimaAdjust: CreateDecimaAdjust;
  private readonly createErrorLog: CreateErrorLog;
  private readonly createRateLimiter: CreateRateLimiter;
  private readonly createDecodeJwt: CreateDecodeJwt;
  private readonly createGuard: CreateGuard;
  private readonly createParseBoolean: CreateParseBoolean;
  private readonly createKeys: CreateKeys;
  private readonly createRoutes: CreateRoutes;
  private readonly createIResponseDTO: CreateIResponseDTO;
  private readonly createIObjectDTO: CreateIObjectDTO;
  private readonly createIListDTO: CreateIListDTO;
  private readonly createICacheDTO: CreateICacheDTO;
  private readonly createIExceptionDTO: CreateIExceptionDTO;
  private readonly createDomains: CreateDomains;
  private readonly createServer: CreateServer;
  private readonly createApp: CreateApp;
  private readonly createExpressNamespace: CreateExpressNamespace;

  constructor() {
    this.fileManager = new FileManager();
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
    this.createParseBoolean = new CreateParseBoolean();
    this.createIResponseDTO = new CreateIResponseDTO();
    this.createIObjectDTO = new CreateIObjectDTO();
    this.createIListDTO = new CreateIListDTO();
    this.createIExceptionDTO = new CreateIExceptionDTO();
    this.createICacheDTO = new CreateICacheDTO();
    this.createDomains = new CreateDomains();
    this.createServer = new CreateServer();
    this.createApp = new CreateApp();
    this.createExpressNamespace = new CreateExpressNamespace();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateFile(
      ['src', '@types', 'express.d.ts'],
      this.createExpressNamespace,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', '@types', 'env.d.ts'],
      this.createEnvNamespace,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', '@types', 'keys.d.ts'],
      this.createKeys,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'assets', 'domains.txt'],
      this.createDomains,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'IExceptionDTO.ts'],
      this.createIExceptionDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'ICacheDTO.ts'],
      this.createICacheDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'IListDTO.ts'],
      this.createIListDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'IObjectDTO.ts'],
      this.createIObjectDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'dtos', 'IResponseDTO.ts'],
      this.createIResponseDTO,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'middlewares', 'RateLimiter.ts'],
      this.createRateLimiter,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'middlewares', 'EnsureAuthenticated.ts'],
      this.createEnsureAuthenticated,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'middlewares', 'ParseBoolean.ts'],
      this.createParseBoolean,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'middlewares', 'DecodeJwt.ts'],
      this.createDecodeJwt,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'routes', 'guardRouter.ts'],
      this.createGuard,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'routes', 'index.ts'],
      this.createRoutes,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'app.ts'],
      this.createApp,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'server.ts'],
      this.createServer,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'decimalAdjust.ts'],
      this.createDecimaAdjust,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'domainsManager.ts'],
      this.createDomainsManager,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'errorLog.ts'],
      this.createErrorLog,
    );
    return this.fileManager.checkAndCreateFile(
      ['src', 'utils', 'normalizeQueryLink.ts'],
      this.createNormalizeQueryLink,
    );
  }
}
