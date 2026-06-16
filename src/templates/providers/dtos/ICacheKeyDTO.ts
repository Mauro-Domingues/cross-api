export class CreateICacheKeyDTO {
  public execute(): string {
    return `export interface ICacheKeyDTO {
  prefix: string;
  suffix?: string;
}
`;
  }
}
