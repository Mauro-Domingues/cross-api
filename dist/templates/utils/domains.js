"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDomainsManager = void 0;
class CreateDomainsManager {
  execute() {
    return `import {
  readFileSync,
  existsSync,
  mkdirSync,
  appendFileSync,
  writeFileSync,
} from 'fs';
import { resolve } from 'path';

export class DomainsManager {
  basePath: string;

  constructor() {
    this.basePath = resolve(__dirname, '..', 'assets', 'domains.txt');
  }

  public read(path = this.basePath): string[] {
    const domains = readFileSync(path, 'utf-8');

    const ArrayOfDomain = domains.split('\\${'n'}');

    return ArrayOfDomain;
  }

  public write(file: string, path = this.basePath): void {
    if (!existsSync(path)) {
      mkdirSync(path);
    }

    const domains = readFileSync(path, 'utf-8');
    const ArrayOfDomain = domains.split('\\${'n'}');
    const checkIfDomainExists = ArrayOfDomain.find(x => x === file);

    if (!checkIfDomainExists) {
      appendFileSync(path, \`\\${'n'}\${file}\`);
    } else {
      console.log(\`\${checkIfDomainExists} already subscribed\`);
    }
  }

  public delete(file: string, path = this.basePath): void {
    const domains = readFileSync(path, 'utf-8');
    const ArrayOfDomain = domains.split('\\${'n'}');

    ArrayOfDomain.forEach((domain, i) => {
      if (domain === file) {
        ArrayOfDomain.splice(i, 1);
      }
    });

    const updatedDomains = ArrayOfDomain.join('\\${'n'}');

    writeFileSync(path, updatedDomains);
  }
}
`;
  }
}
exports.CreateDomainsManager = CreateDomainsManager;