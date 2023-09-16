export class CreateDomainsManager {
  public execute(): string {
    return `import {
  readFileSync,
  existsSync,
  mkdirSync,
  appendFileSync,
  writeFileSync,
} ${'from'} 'fs';
import { resolve } ${'from'} 'path';

const basePath = resolve(__dirname, '..', 'assets', 'domains.txt');

function readDomain(path = basePath): Array<string> {
  const domains = readFileSync(path, 'utf-8');

  const ArrayOfDomain = domains.split('\\${'n'}');

  return ArrayOfDomain;
}

function writeDomain(file: string, path = basePath): void {
  if (!existsSync(path)) {
    mkdirSync(path);
  }

  const domains = readFileSync(path, 'ascii');
  const ArrayOfDomain = domains.split('\\${'n'}');
  const checkIfDomainExists = ArrayOfDomain.find(x => x === file);

  if (!checkIfDomainExists) {
    appendFileSync(path, \`\\${'n'}\${file}\`);
  } else {
    console.log(\`\${checkIfDomainExists} already subscribed\`);
  }
}

function deleteDomain(file: string, path = basePath): void {
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

export { readDomain, writeDomain, deleteDomain };
`;
  }
}
