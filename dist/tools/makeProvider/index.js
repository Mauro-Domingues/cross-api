import { Messages } from '../messages.js';
import { MakeDependentProvider } from './dependent/index.js';
import { MakeProvider } from './independent/index.js';

export class CreateProvider {
  messages;
  providerName;
  fatherNames;
  makeProvider;
  makeDependentProvider;
  constructor(providerName, fatherNames) {
    this.providerName = providerName;
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
    this.makeProvider = new MakeProvider(this.providerName);
    this.makeDependentProvider = new MakeDependentProvider(
      this.providerName,
      this.fatherNames,
    );
  }
  async execute() {
    if (this.providerName && this.fatherNames) {
      await this.makeDependentProvider.execute();
    } else if (this.providerName) {
      await this.makeProvider.execute();
    } else {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.providerNotFound,
        '\x1b[0m',
      );
    }
  }
}
