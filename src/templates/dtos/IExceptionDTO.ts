export class CreateIExceptionDTO {
  public execute(): string {
    return `export interface IExceptionDTO {
  methods: Array<'GET' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'>;
  allowRawRoute?: true;
  allowQueries?: true;
  allowParams?: true;
  url: \`/\${string}\`;
}
`;
  }
}
