export interface IBoardDTO {
  readonly description: {
    readonly 'make:dependent:provider': string;
    readonly 'make:dependent:module': string;
    readonly 'list:provider': string;
    readonly 'make:provider': string;
    readonly 'make:module': string;
    readonly 'make:api': string;
    readonly language: string;
    readonly revert: string;
    readonly help: string;
  };
  readonly headers: {
    readonly structure: string;
    readonly title: string;
    readonly tools: string;
  };
}
