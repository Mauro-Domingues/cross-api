export function createDomainsManager(): string {
  return `import fs from 'fs';

class DomainsManager {
  public read(path = 'src/assets/domains.txt'): string {
    const domains = fs.readFileSync(path, 'utf-8');

    return domains;
  }

  public write(file: string, path = 'src/assets/domains.txt'): void {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }

    const domains = fs.readFileSync(path, 'utf-8');
    const ArrayOfDomain = domains.split('\\${'n'}');
    const checkIfDomainExists = ArrayOfDomain.find(x => x === file);

    if (!checkIfDomainExists) {
      fs.appendFile(path, \`\\${'n'}\${file}\`, error => {
        if (error) throw error;
      });
    } else {
      console.log(\`\${checkIfDomainExists} already subscribed\`);
    }
  }

  public delete(file: string, path = 'src/assets/domains.txt'): void {
    const domains = fs.readFileSync(path, 'utf-8');
    const ArrayOfDomain = domains.split('\\${'n'}');

    ArrayOfDomain.forEach((domain, i) => {
      if (domain === file) {
        ArrayOfDomain.splice(i, 1);
      }
    });

    const updatedDomains = ArrayOfDomain.join('\\${'n'}');

    fs.writeFile(path, updatedDomains, error => {
      if (error) throw error;
      console.log('Successfully deleted the domain');
    });
  }
}

export default DomainsManager;
`;
}
