import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';
import { Readline } from '@tools/readline';
import { Shell } from '@tools/shell';

export class PackageManager {
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;
  private readonly readline: Readline;
  private readonly console: Console;
  private readonly shell: Shell;

  public constructor(
    private readonly dependencies: Array<string>,
    private readonly devDependencies: Array<string>,
  ) {
    this.messages = new Messages().execute();
    this.readline = new Readline(['y', 'n']);
    this.fileManager = new FileManager();
    this.console = new Console();
    this.shell = new Shell();
  }

  private checkPackage(
    field: 'dependencies' | 'devDependencies',
    action: 'install' | 'uninstall',
  ): Array<string> {
    const stringifiedPackage = this.fileManager.readFileSync(['package.json']);
    const jsonPackage: Record<
      'dependencies' | 'devDependencies',
      Record<string, string>
    > = JSON.parse(stringifiedPackage);
    const dependencies: Set<string> = new Set<string>();

    if (!jsonPackage[field]) {
      return action === 'install' ? this[field] : [];
    }

    const existingDependencies = Object.keys(jsonPackage[field]);

    this[field].forEach(dependency => {
      const dependencyName = dependency.replace(/@\^.*/, '');
      const shouldAddDependency =
        (action === 'install' &&
          !existingDependencies.includes(dependencyName)) ||
        (action === 'uninstall' &&
          existingDependencies.includes(dependencyName));

      if (shouldAddDependency) {
        dependencies.add(dependency);
      }
    });

    return Array.from(dependencies);
  }

  private installDependencies(dependencies: Array<string>): void {
    this.console.execute({
      message: this.messages.dependencies.headers.dependencies,
      color: 'blue',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
    this.shell.execute('yarn add '.concat(dependencies.join(' ')));
    return dependencies.forEach(dependency => {
      return this.console.execute({
        message: [
          '- ',
          dependency.replace(/@\^.*/, ''),
          ' ',
          this.messages.dependencies.description.installed,
        ],
        color: 'yellow',
        bold: false,
        breakStart: false,
        breakEnd: !this.devDependencies.length,
      });
    });
  }

  private installDevDependencies(devDependencies: Array<string>): void {
    this.console.execute({
      message: this.messages.dependencies.headers.devDependencies,
      color: 'blue',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
    this.shell.execute('yarn add '.concat(devDependencies.join(' '), ' -D'));
    return devDependencies.forEach(devDependency => {
      return this.console.execute({
        message: [
          '- ',
          devDependency.replace(/@\^.*/, ''),
          ' ',
          this.messages.dependencies.description.installed,
        ],
        color: 'yellow',
        bold: false,
        breakStart: false,
        breakEnd: false,
      });
    });
  }

  private uninstallDependencies(dependencies: Array<string>): void {
    this.console.execute({
      message: this.messages.dependencies.question,
      color: 'green',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
    this.readline.execute((optionChosen: 'y' | 'n'): void => {
      if (optionChosen === 'y') {
        this.console.execute({
          message: this.messages.dependencies.headers.uninstalling,
          color: 'blue',
          bold: true,
          breakStart: true,
          breakEnd: true,
        });
        this.shell.execute('yarn remove '.concat(dependencies.join(' ')));
        dependencies.forEach(dependency => {
          return this.console.execute({
            message: [
              '- ',
              dependency.replace(/@\^.*/, ''),
              ' ',
              this.messages.dependencies.description.uninstalled,
            ],
            color: 'red',
            bold: false,
            breakStart: false,
            breakEnd: false,
          });
        });
      }
    });
  }

  private install(): void {
    const dependencies = this.checkPackage('dependencies', 'install');
    const devDependencies = this.checkPackage('devDependencies', 'install');

    if (dependencies.length) this.installDependencies(dependencies);
    if (devDependencies.length) this.installDevDependencies(devDependencies);
  }

  private uninstall(): void {
    const dependencies = this.checkPackage('dependencies', 'uninstall');
    const devDependencies = this.checkPackage('devDependencies', 'uninstall');
    const dependenciesToUninstall = [
      ...(dependencies || []),
      ...(devDependencies || []),
    ];

    if (dependenciesToUninstall.length) {
      this.uninstallDependencies(dependenciesToUninstall);
    }
  }

  public execute(action: 'install' | 'uninstall'): void {
    return this[action]();
  }
}
