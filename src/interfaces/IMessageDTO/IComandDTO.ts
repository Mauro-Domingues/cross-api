export interface IComandDTO {
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
    readonly notReversed: string;
    readonly notFound: string;
  };
}
