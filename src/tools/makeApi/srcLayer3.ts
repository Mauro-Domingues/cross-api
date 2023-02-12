import { appendFile, existsSync, truncate } from 'fs';
import { createExpressNamespace } from '@templates/types/expressNamespace';
import { createApp } from '@templates/api/app';
import { createServer } from '@templates/api/server';
import { createDomains } from '@templates/assets/domains';
import { createICacheDTO } from '@templates/dtos/ICacheDTO';
import { createIListDTO } from '@templates/dtos/IListDTO';
import { createIObjectDTO } from '@templates/dtos/IObjectDTO';
import { createIResponseDTO } from '@templates/dtos/IResponseDTO';
import { createRoutes } from '@templates/index/routes';
import { createRateLimiter } from '@templates/middlewares/rateLimiter';
import { createDecimaAdjust } from '@templates/utils/decimalAdjust';
import { createDomainsManager } from '@templates/utils/domains';
import messages from '@tools/messages';
import { createEnsureAuthenticated } from '@templates/middlewares/ensureAuthenticated';

export async function makeThirdLayer(): Promise<void> {
  if (!existsSync('src/@types/express.d.ts')) {
    appendFile('src/@types/express.d.ts', createExpressNamespace(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/@types/express.d.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/@types/express.d.ts', createExpressNamespace(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- express.d.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/assets/domains.txt')) {
    appendFile('src/assets/domains.txt', createDomains(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/assets/domains.txt', error => {
      if (error) console.log(error);
    });
    appendFile('src/assets/domains.txt', createDomains(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- domains.txt ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/dtos/ICacheDTO.ts')) {
    appendFile('src/dtos/ICacheDTO.ts', createICacheDTO(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/dtos/ICacheDTO.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/dtos/ICacheDTO.ts', createICacheDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- ICacheDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/dtos/IListDTO.ts')) {
    appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/dtos/IListDTO.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- IListDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/dtos/IObjectDTO.ts')) {
    appendFile('src/dtos/IObjectDTO.ts', createIObjectDTO(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/dtos/IObjectDTO.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/dtos/IObjectDTO.ts', createIObjectDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- IObjectDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/dtos/IResponseDTO.ts')) {
    appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/dtos/IResponseDTO.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- IResponseDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/middlewares/RateLimiter.ts')) {
    appendFile('src/middlewares/RateLimiter.ts', createRateLimiter(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/middlewares/RateLimiter.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/middlewares/RateLimiter.ts', createRateLimiter(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- RateLimiter.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/middlewares/EnsureAuthenticated.ts')) {
    appendFile(
      'src/middlewares/EnsureAuthenticated.ts',
      createEnsureAuthenticated(),
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
      createEnsureAuthenticated(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- RateLimiter.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/routes/index.ts')) {
    appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/routes/index.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- routes.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/shared/app.ts')) {
    appendFile('src/shared/app.ts', createApp(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/shared/app.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/shared/app.ts', createApp(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- app.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/shared/server.ts')) {
    appendFile('src/shared/server.ts', createServer(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/shared/server.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/shared/server.ts', createServer(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- server.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/utils/decimalAdjust.ts')) {
    appendFile('src/utils/decimalAdjust.ts', createDecimaAdjust(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/utils/decimalAdjust.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/utils/decimalAdjust.ts', createDecimaAdjust(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- decimalAdjust.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!existsSync('src/utils/domainsManager.ts')) {
    appendFile('src/utils/domainsManager.ts', createDomainsManager(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/utils/domainsManager.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/utils/domainsManager.ts', createDomainsManager(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- domainsManager.ts ${messages.created}`,
    '\x1b[0m',
  );
}
