export interface IMessageDTO {
  readonly marketplaceTool: {
    readonly description: {
      readonly action: string;
      readonly info: string;
    };
  };
  readonly dependencies: {
    readonly question: string;
    readonly description: {
      readonly uninstalled: string;
      readonly installed: string;
    };
    readonly headers: {
      readonly devDependencies: string;
      readonly uninstalling: string;
      readonly dependencies: string;
      readonly yarn: string;
    };
  };
  readonly providers: {
    readonly headers: {
      readonly description: string;
      readonly title: string;
    };
    readonly errors: {
      readonly notFound: string;
    };
  };
  readonly language: {
    readonly question: string;
    readonly choice: string;
    readonly headers: {
      readonly description: string;
      readonly title: string;
    };
    readonly options: {
      readonly enUs: string;
      readonly ptBr: string;
    };
  };
  readonly modules: {
    readonly errors: {
      readonly notFound: string;
    };
  };
  readonly comands: {
    readonly answer: string;
    readonly description: {
      readonly apiCreated: string;
      readonly configured: string;
      readonly reversed: string;
      readonly created: string;
      readonly attempt: {
        readonly action: string;
        readonly comand: string;
        readonly info: string;
      };
    };
    readonly errors: {
      readonly invalidOption: string;
      readonly notAvailable: string;
      readonly notReversed: string;
      readonly notFound: string;
    };
  };
  readonly mappers: {
    readonly description: {
      readonly mapAndUpdateString: string;
      readonly mapAndPatchString: string;
      readonly patchAndInsert: string;
      readonly mapAndUpdate: string;
      readonly mapAndPatch: string;
      readonly mapAndClone: string;
    };
  };
  readonly board: {
    readonly headers: {
      readonly structure: string;
      readonly title: string;
      readonly tools: string;
    };
    readonly description: {
      readonly 'make:dependent:provider': string;
      readonly 'make:dependent:module': string;
      readonly 'list:provider': string;
      readonly 'make:provider': string;
      readonly 'make:module': string;
      readonly 'make:api': string;
      readonly language: string;
      readonly comands: string;
      readonly revert: string;
    };
  };
}
