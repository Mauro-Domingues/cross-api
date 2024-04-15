import { createInterface } from 'node:readline';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';
import { Messages } from '@tools/messages';

export class Readline {
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  constructor(private readonly suggestions: Array<string>) {
    this.messages = new Messages().execute();
    this.console = new Console();
  }

  public invalidOption(optionChosen: string): void {
    return this.console.execute({
      message: `"${optionChosen}"${this.messages.comands.errors.invalidOption}`,
      color: 'red',
      bold: true,
      breakStart: true,
      breakEnd: false,
    });
  }

  public execute<Answer extends string>(
    callback: (optionChosen: Answer) => void,
  ): void {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
      completer: (word: string): Array<string | Array<string>> => {
        const hits = this.suggestions.filter(suggestion =>
          suggestion.startsWith(word),
        );
        return [hits.length ? hits : this.suggestions, word];
      },
    });

    return rl.question(
      this.messages.comands.answer,
      (optionChosen: string): void => {
        rl.close();
        callback(optionChosen as Answer);
      },
    );
  }
}
