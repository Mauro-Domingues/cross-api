export class CreateDomainsManager {
  public execute(): string {
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

  public read(path = this.basePath): string {
    const domains = readFileSync(path, 'utf-8');

    return domains;
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

    writeFile(path, updatedDomains);
  }
}
`;
  }
}
