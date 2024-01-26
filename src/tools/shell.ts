import { execSync } from 'node:child_process';

export class Shell {
  public execute(comand: string): string {
    return execSync(comand, { encoding: 'utf-8' });
  }
}
