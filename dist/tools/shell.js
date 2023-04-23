import { execSync } from 'child_process';
export class Shell {
    async execute(comand) {
        return execSync(comand, { encoding: 'utf-8' });
    }
}
