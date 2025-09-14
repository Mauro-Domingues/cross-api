import { execSync } from 'node:child_process';
import { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
import { IShellDTO } from '@interfaces/ISingletonDTO/IShellDTO';
import { CustomError } from '@tools/customError';
import { Messages } from '@tools/messages';

export class Shell {
  private readonly packageVersionPattern: RegExp;
  private readonly installationPattern: RegExp;
  private readonly addRemovePattern: RegExp;
  private readonly allowedPattern: RegExp;
  private readonly helpMessages: IHelpDTO;
  private readonly yarnPattern: RegExp;
  private static instance: IShellDTO;

  private constructor() {
    this.packageVersionPattern = /(@[\w-]+\/[\w-]+|[\w-]+)(@\^?[\d.]+)? ?/;
    this.installationPattern = /npm install yarn --location=global/;
    this.addRemovePattern = /yarn (add|remove)( -D)?/;
    this.helpMessages = Messages.getInstance().help;
    this.yarnPattern = new RegExp(
      `${this.addRemovePattern.source} (${this.packageVersionPattern.source})+`,
    );
    this.allowedPattern = new RegExp(
      `^(${this.installationPattern.source}|${this.yarnPattern.source})$`,
    );
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
      message: ['"', command, '"', this.helpMessages.errors.invalidOption],
      color: 'red',
      options: ['bold', 'breakStart', 'breakEnd'],
    });
  }
}
