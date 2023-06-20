export class CreateHashConfig {
  public execute(): string {
    return `interface IHashConfigDTO {
  secret: number;
}

export const hashConfig: IHashConfigDTO = {
  secret: process.env.HASH_SECRET_KEY
    ? Number(process.env.HASH_SECRET_KEY)
    : 10,
};
`;
  }
}
