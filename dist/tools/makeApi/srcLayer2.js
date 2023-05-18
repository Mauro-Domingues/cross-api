import { Console } from '../console.js';
import { FileManager } from '../fileManager.js';
import { Messages } from '../messages.js';
export class MakeSecondLayer {
    messages;
    fileManager;
    console;
    constructor() {
        this.messages = new Messages().execute();
        this.fileManager = new FileManager();
        this.console = new Console();
    }
    async execute() {
        if (!this.fileManager.checkIfExists(['src', 'swagger.json'])) {
            await this.fileManager.createFile(['src', 'swagger.json'], '{}');
        }
        else {
            await this.fileManager.truncateFile(['src', 'swagger.json']);
            await this.fileManager.createFile(['src', 'swagger.json'], '{}');
        }
        return this.console.one([
            `- swagger.json ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
    }
}
