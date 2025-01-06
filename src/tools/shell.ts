import { execSync } from 'node:child_process';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IShellDTO } from '@interfaces/ISingletonDTO/IShellDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class Shell {
  private readonly packageVersionPattern: RegExp;
  private readonly installationPattern: RegExp;
  private readonly addRemovePattern: RegExp;
  private readonly allowedPattern: RegExp;
  private readonly messages: IMessageDTO;
  private readonly yarnPattern: RegExp;
  private static instance: IShellDTO;

  private constructor() {
    this.packageVersionPattern = /(@[\w-]+\/[\w-]+|[\w-]+)(@\^?[\d.]+)? ?/;
    this.installationPattern = /npm install yarn --location=global/;
    this.addRemovePattern = /yarn (add|remove)( -D)?/;
    this.yarnPattern = new RegExp(
      `${this.addRemovePattern.source} (${this.packageVersionPattern.source})+`,
    );
    this.allowedPattern = new RegExp(
      `^(${this.installationPattern.source}|${this.yarnPattern.source})$`,
    );
    this.messages = Messages.getInstance().execute();
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
