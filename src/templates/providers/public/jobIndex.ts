export class CreateJobIndex {
  public execute(): string {
    return `import { Example } fr\u006Fm '@jobs/Example';

export const jobs = [Example];
`;
  }
}
