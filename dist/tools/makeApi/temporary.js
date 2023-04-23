import { Messages } from '../messages.js';
import { CreateAuthConfig } from '../../templates/providers/config/authConfig.js';
import { CreateCorsConfig } from '../../templates/providers/config/corsConfig.js';
import { Console } from '../console.js';
import { FileManager } from '../fileManager.js';
export class MakeTemporary {
    messages;
    fileManager;
    console;
    createCorsConfig;
    createAuthConfig;
    constructor() {
        this.messages = new Messages().execute();
        this.fileManager = new FileManager();
        this.console = new Console();
        this.createCorsConfig = new CreateCorsConfig();
        this.createAuthConfig = new CreateAuthConfig();
    }
    async execute() {
        if (!this.fileManager.checkIfExists(['src', 'config', 'auth.ts'])) {
            await this.fileManager.createFile(['src', 'config', 'auth.ts'], this.createAuthConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'config', 'auth.ts']);
            await this.fileManager.createFile(['src', 'config', 'auth.ts'], this.createAuthConfig.execute());
        }
        this.console.one([
            `- auth.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['src', 'config', 'cors.ts'])) {
            await this.fileManager.createFile(['src', 'config', 'cors.ts'], this.createCorsConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'config', 'cors.ts']);
            await this.fileManager.createFile(['src', 'config', 'cors.ts'], this.createCorsConfig.execute());
        }
        return this.console.one([
            `- cors.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
    }
}
