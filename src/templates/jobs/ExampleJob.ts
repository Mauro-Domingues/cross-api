export class CreateExampleJob {
  public execute(): string {
    return `export class Example {
  public static get key(): Capitalize<string> {
    return 'Example';
  }

  public async handle({ data }: { data: { message: string } }): Promise<void> {
    return console.log('I have a message for you: %s', data.message);
  }
}
`;
  }
}
