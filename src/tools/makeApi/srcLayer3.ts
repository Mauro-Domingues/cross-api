import { appendFile, existsSync, truncate } from 'fs';
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

export class MakeThirdLayer {
  private messages: typeof messages;
  private createEnvNamespace: CreateEnvNamespace;
  private createEnsureAuthenticated: CreateEnsureAuthenticated;
  private createDomainsManager: CreateDomainsManager;
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
      appendFile(
        'src/@types/express.d.ts',
        this.createExpressNamespace.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/@types/express.d.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/@types/express.d.ts',
        this.createExpressNamespace.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- express.d.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/@types/env.d.ts')) {
      appendFile(
        'src/@types/env.d.ts',
        this.createEnvNamespace.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/@types/env.d.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/@types/env.d.ts',
        this.createEnvNamespace.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- env.d.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/assets/domains.txt')) {
      appendFile(
        'src/assets/domains.txt',
        this.createDomains.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/assets/domains.txt', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/assets/domains.txt',
        this.createDomains.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- domains.txt ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/dtos/ICacheDTO.ts')) {
      appendFile(
        'src/dtos/ICacheDTO.ts',
        this.createICacheDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/dtos/ICacheDTO.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/dtos/ICacheDTO.ts',
        this.createICacheDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- ICacheDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/dtos/IListDTO.ts')) {
      appendFile(
        'src/dtos/IListDTO.ts',
        this.createIListDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/dtos/IListDTO.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/dtos/IListDTO.ts',
        this.createIListDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- IListDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/dtos/IObjectDTO.ts')) {
      appendFile(
        'src/dtos/IObjectDTO.ts',
        this.createIObjectDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/dtos/IObjectDTO.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/dtos/IObjectDTO.ts',
        this.createIObjectDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- IObjectDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/dtos/IResponseDTO.ts')) {
      appendFile(
        'src/dtos/IResponseDTO.ts',
        this.createIResponseDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/dtos/IResponseDTO.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/dtos/IResponseDTO.ts',
        this.createIResponseDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- IResponseDTO.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/middlewares/RateLimiter.ts')) {
      appendFile(
        'src/middlewares/RateLimiter.ts',
        this.createRateLimiter.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/middlewares/RateLimiter.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/middlewares/RateLimiter.ts',
        this.createRateLimiter.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- RateLimiter.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/middlewares/EnsureAuthenticated.ts')) {
      appendFile(
        'src/middlewares/EnsureAuthenticated.ts',
        this.createEnsureAuthenticated.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/middlewares/EnsureAuthenticated.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/middlewares/EnsureAuthenticated.ts',
        this.createEnsureAuthenticated.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- RateLimiter.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/routes/index.ts')) {
      appendFile('src/routes/index.ts', this.createRoutes.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('src/routes/index.ts', error => {
        if (error) console.log(error);
      });
      appendFile('src/routes/index.ts', this.createRoutes.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- routes.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/shared/app.ts')) {
      appendFile('src/shared/app.ts', this.createApp.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('src/shared/app.ts', error => {
        if (error) console.log(error);
      });
      appendFile('src/shared/app.ts', this.createApp.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- app.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/shared/server.ts')) {
      appendFile('src/shared/server.ts', this.createServer.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('src/shared/server.ts', error => {
        if (error) console.log(error);
      });
      appendFile('src/shared/server.ts', this.createServer.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- server.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/decimalAdjust.ts')) {
      appendFile(
        'src/utils/decimalAdjust.ts',
        this.createDecimaAdjust.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/utils/decimalAdjust.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/utils/decimalAdjust.ts',
        this.createDecimaAdjust.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- decimalAdjust.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('src/utils/domainsManager.ts')) {
      appendFile(
        'src/utils/domainsManager.ts',
        this.createDomainsManager.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/utils/domainsManager.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/utils/domainsManager.ts',
        this.createDomainsManager.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- domainsManager.ts ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
