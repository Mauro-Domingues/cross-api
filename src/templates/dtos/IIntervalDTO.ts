export class CreateIIntervalDTO {
  public execute(): string {
    return `export type IIntervalDTO = \`\${number}\${'d' | 'h' | 'min' | 's' | 'ms'}\`;
`;
  }
}
