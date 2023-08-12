export class CreateExampleJob {
  public execute(): string {
    return `export class Example {
  public static get key() {
    return 'Example';
  }

  public async handle({ data }: { data: { message: string } }) {
    return console.log(\`I have a message for you: \${data.message}\`);
  }
}
`;
  }
}
