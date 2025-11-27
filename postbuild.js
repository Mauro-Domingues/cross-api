import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

new (class PostBuild {
  #fromEscapedRegex;
  #emptyDeclRegex;

  constructor() {
    this.#emptyDeclRegex = /\s{2,4}(static\s+)?(?!return|break)(\w+)\s*;\n?/g;
    this.#fromEscapedRegex = /fr\\om/g;
  }

  #findJsFiles(directory, files = []) {
    const entries = readdirSync(directory);

    entries.forEach(entry => {
      const fullPath = join(directory, entry);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        this.#findJsFiles(fullPath, files);
      } else if (entry.endsWith('.js')) {
        files.push(fullPath);
      }
    });

    return files;
  }

  execute() {
    const files = this.#findJsFiles('src');

    files.forEach(file => {
      const originalContent = readFileSync(file, 'utf-8');

      const newContent = originalContent
        .replaceAll(this.#emptyDeclRegex, '')
        .replaceAll(this.#fromEscapedRegex, 'from');

      if (newContent !== originalContent) {
        writeFileSync(file, newContent, 'utf-8');
      }
    });
  }
})().execute();
