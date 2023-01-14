import fs from 'fs';
import createExpressNamespace from '../../templates/@types/expressNamespace';
import createApp from '../../templates/api/app';
import createServer from '../../templates/api/server';
import createICacheDTO from '../../templates/dtos/ICacheDTO';
import createIListDTO from '../../templates/dtos/IListDTO';
import createIObjectDTO from '../../templates/dtos/IObjectDTO';
import createIResponseDTO from '../../templates/dtos/IResponseDTO';
import createRoutes from '../../templates/index/routes';
import createRateLimiter from '../../templates/middlewares/rateLimiter';
import createDecimaAdjust from '../../templates/utils/decimalAdjust';
import messages from '../messages';

export default async function makeThirdLayer(): Promise<void> {
  if (!fs.existsSync('src/@types/express.d.ts')) {
    fs.appendFile(
      'src/@types/express.d.ts',
      createExpressNamespace(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/@types/express.d.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/@types/express.d.ts',
      createExpressNamespace(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- express.d.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/dtos/ICacheDTO.ts')) {
    fs.appendFile('src/dtos/ICacheDTO.ts', createICacheDTO(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/dtos/ICacheDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/ICacheDTO.ts', createICacheDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- ICacheDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/dtos/IListDTO.ts')) {
    fs.appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/dtos/IListDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- IListDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/dtos/IObjectDTO.ts')) {
    fs.appendFile('src/dtos/IObjectDTO.ts', createIObjectDTO(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/dtos/IObjectDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IObjectDTO.ts', createIObjectDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- IObjectDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/dtos/IResponseDTO.ts')) {
    fs.appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/dtos/IResponseDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- IResponseDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/middlewares/RateLimiter.ts')) {
    fs.appendFile(
      'src/middlewares/RateLimiter.ts',
      createRateLimiter(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/middlewares/RateLimiter.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/middlewares/RateLimiter.ts',
      createRateLimiter(),
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
  if (!fs.existsSync('src/routes/index.ts')) {
    fs.appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/routes/index.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- routes.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/shared/app.ts')) {
    fs.appendFile('src/shared/app.ts', createApp(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/shared/app.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/app.ts', createApp(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- app.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/shared/server.ts')) {
    fs.appendFile('src/shared/server.ts', createServer(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/shared/server.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/server.ts', createServer(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- server.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/utils/decimalAdjust.ts')) {
    fs.appendFile('src/utils/decimalAdjust.ts', createDecimaAdjust(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/utils/decimalAdjust.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/utils/decimalAdjust.ts', createDecimaAdjust(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- decimaAdjust.ts ${messages.created}`,
    '\x1b[0m',
  );
}
