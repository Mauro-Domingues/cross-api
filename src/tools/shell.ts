import { execSync } from 'node:child_process';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IShellDTO } from '@interfaces/ISingletonDTO/IShellDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class Shell {
  private readonly allowedPattern: RegExp;
  private readonly messages: IMessageDTO;
  private static instance: IShellDTO;

  private constructor() {
    this.allowedPattern =
      /^(npm install yarn --location=global|yarn (add|remove)( -D)? ((@[\w-]+\/[\w-]+|[\w-]+)(@\^?[\d.]+)? ?)+)$/;
    this.messages = new Messages().execute();
  }

  public static getInstance(): IShellDTO {
    if (!Shell.instance) {
      Shell.instance = new Shell();
    }
    return Shell.instance;
  }

  public execute(command: string): string {
    if (this.allowedPattern.test(command)) {
      return execSync(command, { encoding: 'utf-8' });
    }
    throw new CustomError({
      message: ['"', command, '"', this.messages.comands.errors.invalidOption],
      color: 'red',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
  }
}
