export class CreateJobIndex {
  public execute(): string {
    return `import { Example } fr\om '@jobs/Example';

export const jobs = [Example];
`;
  }
}
