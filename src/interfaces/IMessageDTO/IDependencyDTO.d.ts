export interface IDependencyDTO {
  readonly description: {
    readonly uninstalled: string;
    readonly installed: string;
  };
  readonly question: string;
  readonly headers: {
    readonly devDependencies: string;
    readonly uninstalling: string;
    readonly dependencies: string;
    readonly yarn: string;
  };
}
