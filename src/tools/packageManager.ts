import type { IDependencyDTO } from '@interfaces/IMessageDTO/IDependencyDTO';
import { Concat } from '@tools/concat';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';
import { Readline } from '@tools/readline';
import { Shell } from '@tools/shell';

export class PackageManager {
  private readonly dependencyMessages: IDependencyDTO;
  private readonly directivePattern: RegExp;
  private readonly fileManager: FileManager;
  private readonly readline: Readline;
  private readonly console: Console;
  private readonly concat: Concat;
  private readonly shell: Shell;

  public constructor(
    private readonly dependencies: Array<string>,
    private readonly devDependencies: Array<string>,
    dependencyMessages?: IDependencyDTO,
  ) {
    this.dependencyMessages =
      dependencyMessages ?? Messages.getInstance().dependencies;
    this.fileManager = FileManager.getInstance();
    this.readline = new Readline(['y', 'n']);
    this.console = Console.getInstance();
    this.concat = Concat.getInstance();
    this.shell = Shell.getInstance();
    this.directivePattern = /@\^.*/;
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

    const existingDependencies = new Set(Object.keys(jsonPackage[field]));

    this[field].forEach(dependency => {
      const dependencyName = dependency.replace(this.directivePattern, '');
      const shouldAddDependency =
        (action === 'install' && !existingDependencies.has(dependencyName)) ||
        (action === 'uninstall' && existingDependencies.has(dependencyName));

      if (shouldAddDependency) {
        dependencies.add(dependency);
      }
    });

    return Array.from(dependencies);
  }

  private installDependencies(dependencies: Array<string>): void {
    this.console.execute({
      message: this.dependencyMessages.headers.dependencies,
      color: 'blue',
      options: ['bold', 'breakStart', 'breakEnd'],
    });
    this.shell.execute(
      this.concat.execute('yarn add ', dependencies.join(' ')),
    );
    return dependencies.forEach((dependency, index) => {
      return this.console.execute({
        message: [
          '- ',
          dependency.replace(this.directivePattern, ''),
          ' ',
          this.dependencyMessages.description.installed,
        ],
        color: 'yellow',
        ...(!this.devDependencies.length &&
          dependencies.length - 1 === index && { options: ['breakEnd'] }),
      });
    });
  }

  private installDevDependencies(devDependencies: Array<string>): void {
    this.console.execute({
      message: this.dependencyMessages.headers.devDependencies,
      color: 'blue',
      options: ['bold', 'breakStart', 'breakEnd'],
    });
    this.shell.execute(
      this.concat.execute('yarn add ', devDependencies.join(' '), ' -D'),
    );
    return devDependencies.forEach((devDependency, index) => {
      return this.console.execute({
        message: [
          '- ',
          devDependency.replace(this.directivePattern, ''),
          ' ',
          this.dependencyMessages.description.installed,
        ],
        color: 'yellow',
        ...(devDependencies.length - 1 === index && { options: ['breakEnd'] }),
      });
    });
  }

  private uninstallDependencies(dependencies: Array<string>): void {
    this.console.execute({
      message: this.dependencyMessages.question,
      color: 'green',
      options: ['bold', 'breakStart', 'breakEnd'],
    });
    this.readline.execute((optionChosen: 'y' | 'n'): void => {
      if (optionChosen === 'y') {
        this.console.execute({
          message: this.dependencyMessages.headers.uninstalling,
          color: 'blue',
          options: ['bold', 'breakStart', 'breakEnd'],
        });
        this.shell.execute(
          this.concat.execute('yarn remove ', dependencies.join(' ')),
        );
        dependencies.forEach((dependency, index) => {
          return this.console.execute({
            message: [
              '- ',
              dependency.replace(this.directivePattern, ''),
              ' ',
              this.dependencyMessages.description.uninstalled,
            ],
            color: 'red',
            ...(dependencies.length - 1 === index && {
              options: ['breakEnd'],
            }),
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
    ].map(dependency => dependency.replace(this.directivePattern, ''));

    if (dependenciesToUninstall.length) {
      this.uninstallDependencies(dependenciesToUninstall);
    }
  }

  public execute(action: 'install' | 'uninstall'): void {
    return this[action]();
  }
}
