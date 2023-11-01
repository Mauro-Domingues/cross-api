export class CreateHashConfig {
  public execute(): string {
    return `interface IHashConfigDTO {
  driver: 'bcrypt';
  config: { secret: number };
}

export const hashConfig: IHashConfigDTO = {
  driver: 'bcrypt',
  config: { secret: Number(process.env.HASH_SECRET_KEY) },
};
`;
  }
}
