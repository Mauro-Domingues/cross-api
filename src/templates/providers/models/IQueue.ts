export class CreateIQueue {
  public execute(): string {
    return `export interface IQueueProviderDTO {
  execute<T extends object>(
    key: string,
    data: T,
    attempts?: number,
  ): Promise<unknown>;
  schedule<T extends object>(
    key: string,
    data: T,
    delay:
      | \`\${number}d\`
      | \`\${number}h\`
      | \`\${number}min\`
      | \`\${number}s\`
      | \`\${number}ms\`,
    attempts?: number,
  ): Promise<unknown>;
}
`;
  }
}
