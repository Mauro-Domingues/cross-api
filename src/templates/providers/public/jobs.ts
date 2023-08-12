export class CreateJobs {
  public execute(): string {
    return `import { Example } from '@jobs/Example';

export const jobs = [Example];
`;
  }
}
