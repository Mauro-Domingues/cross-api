export interface ILanguageDTO {
  readonly question: string;
  readonly headers: {
    readonly description: string;
    readonly title: string;
  };
  readonly options: {
    readonly enUs: string;
    readonly ptBr: string;
  };
  readonly choice: string;
}
