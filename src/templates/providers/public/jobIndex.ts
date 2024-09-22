export class CreateJobIndex {
  public execute(): string {
    return `import { Example } ${'from'} '@jobs/Example';

export const jobs = [Example];
`;
  }
}
