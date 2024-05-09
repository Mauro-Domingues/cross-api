export interface IProviderDTO {
  readonly headers: {
    readonly description: string;
    readonly title: string;
  };
  readonly errors: {
    readonly notFound: string;
  };
}
