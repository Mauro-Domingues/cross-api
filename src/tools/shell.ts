import { execSync } from 'child_process';

export class Shell {
  public async execute(comand: string): Promise<string> {
    return execSync(comand, { encoding: 'utf-8' });
  }
}
