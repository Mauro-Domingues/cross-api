export class CreateIQueue {
  public execute(): string {
    return `export interface IQueueProvider {
  execute<T extends object>(
    key: Capitalize<string>,
    data: T,
    attempts?: number,
  ): Promise<unknown>;
  schedule<T extends object>(
    key: Capitalize<string>,
    data: T,
    delay: \`\${number}\${'d' | 'h' | 'min' | 's' | 'ms'}\`,
    attempts?: number,
  ): Promise<unknown>;
}
`;
  }
}
