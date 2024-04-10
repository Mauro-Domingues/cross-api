import { createInterface, Interface } from 'node:readline';
import { Messages, IMessagesDTO } from '@tools/messages';
import { Console } from '@tools/console';

export class Readline {
  private readonly messages: IMessagesDTO;
  private readonly interface: Interface;
  private readonly console: Console;

  constructor(private readonly suggestions: Array<string>) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.interface = createInterface({
      input: process.stdin,
      output: process.stdout,
      completer: (word: string): Array<string | Array<string>> => {
        const hits = this.suggestions.filter(suggestion =>
          suggestion.startsWith(word),
        );
        return [hits.length ? hits : this.suggestions, word];
      },
    });
  }

  public invalidOption(optionChosen: string): void {
    return this.console.single({
      message: `"${optionChosen}"${this.messages.invalidOption}`,
      color: 'red',
      bold: true,
      breakStart: true,
      breakEnd: false,
    });
  }

  public execute<Answer extends string>(
    callback: (optionChosen: Answer) => void,
  ): void {
    this.interface.question(
      this.messages.answer,
      (optionChosen: string): void => {
        this.interface.close();
        callback(optionChosen as Answer);
      },
    );
  }
}
