import { Shell } from '@tools/shell';
import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { FileManager } from '@tools/fileManager';

export class PackageManager {
  private readonly fileManager: FileManager;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly shell: Shell;

  public constructor(
    private readonly dependencies: Array<string>,
    private readonly devDependencies: Array<string>,
  ) {
    this.messages = new Messages().execute();
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
      const shouldAddDependency =
        (action === 'install' && !existingDependencies.includes(dependency)) ||
        (action === 'uninstall' && existingDependencies.includes(dependency));

      if (shouldAddDependency) {
        dependencies.add(dependency);
      }
    });

    return Array.from(dependencies);
  }

  private installDependencies(dependencies: Array<string>): void {
    this.console.single({
      message: this.messages.dependencies,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: true,
    });
    this.shell.execute(`yarn add ${dependencies.join(' ')}`);
    return dependencies.forEach(dependency => {
      return this.console.single({
        message: `- ${dependency} ${this.messages.installed}`,
        color: 'yellow',
        bold: false,
        breakStart: false,
        breakEnd: false,
      });
    });
  }

  private installDevDependencies(devDependencies: Array<string>): void {
    this.console.single({
      message: this.messages.devDependencies,
      color: 'blue',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
    this.shell.execute(`yarn add ${devDependencies.join(' ')} -D`);
    return devDependencies.forEach(devDependency => {
      return this.console.single({
        message: `- ${devDependency} ${this.messages.installed}`,
        color: 'yellow',
        bold: false,
        breakStart: false,
        breakEnd: false,
      });
    });
  }

  private uninstallDependencies(dependencies: Array<string>): void {
    this.console.single({
      message: this.messages.uninstallingDependencies,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: true,
    });
    this.shell.execute(`yarn remove ${dependencies.join(' ')}`);
    return dependencies.forEach(dependency => {
      return this.console.single({
        message: `- ${dependency} ${this.messages.uninstalled}`,
        color: 'red',
        bold: false,
        breakStart: false,
        breakEnd: false,
      });
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
