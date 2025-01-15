import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';
import { IComandDTO } from '@interfaces/IMessageDTO/IComandDTO';
import { Console } from '@tools/console';
import { Messages } from '@tools/messages';

export class Readline {
  private readonly comandMessages: IComandDTO;
  private readonly console: Console;

  public constructor(private readonly suggestions: Array<string>) {
    this.comandMessages = Messages.getInstance().comands;
    this.console = Console.getInstance();
  }

  public invalidOption(optionChosen: string): void {
    return this.console.execute({
      message: [
        '"',
        optionChosen,
        '"',
        this.comandMessages.errors.invalidOption,
      ],
      color: 'red',
      bold: true,
      breakStart: true,
    });
  }

  public execute<Answer extends string>(
    callback: (optionChosen: Answer) => void,
  ): void {
    const rl = createInterface({
      input: stdin,
      output: stdout,
      completer: (word: string): Array<string | Array<string>> => {
        const hits = this.suggestions.filter(suggestion =>
          suggestion.startsWith(word),
        );
        return [hits.length ? hits : this.suggestions, word];
      },
    });

    return rl.question<Answer>(
      this.comandMessages.answer,
      (optionChosen: Answer): void => {
        rl.close();
        callback(optionChosen);
      },
    );
  }
}
