export class CreateDomainsManager {
  public execute(): string {
    return `import {
  readFileSync,
  existsSync,
  mkdirSync,
  appendFileSync,
  writeFileSync,
} ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';

const basePath = resolve(__dirname, '..', 'assets', 'domains.txt');

function readDomain(path = basePath): Array<string> {
  const domains = readFileSync(path, 'utf-8');

  return domains.split('\\${'n'}');
}

function writeDomain(file: string, path = basePath): void {
  if (!existsSync(path)) {
    mkdirSync(path);
  }

  const domains = readFileSync(path, 'ascii');
  const ArrayOfDomain = domains.split('\\${'n'}');
  const checkIfDomainExists = ArrayOfDomain.some(domain => domain === file);

  if (!checkIfDomainExists) {
    appendFileSync(path, \`\\${'n'}\${file}\`);
  } else {
    console.log(\`\${checkIfDomainExists} already subscribed\`);
  }
}

function deleteDomain(file: string, path = basePath): void {
  const domains = readFileSync(path, 'utf-8');
  const ArrayOfDomain = domains.split('\\${'n'}');

  const domainIndex = ArrayOfDomain.findIndex(domain => domain === file);

  if (domainIndex > -1) {
    ArrayOfDomain.splice(domainIndex, 1);
  }

  const updatedDomains = ArrayOfDomain.join('\\${'n'}');

  writeFileSync(path, updatedDomains);
}

export { readDomain, writeDomain, deleteDomain };
`;
  }
}
