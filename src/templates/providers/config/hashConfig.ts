export class CreateHashConfig {
  public execute(): string {
    return `interface IHashConfigDTO {
  readonly driver: 'bcrypt';
  readonly config: { readonly salt: number | string };
}

export const hashConfig = Object.freeze<IHashConfigDTO>({
  driver: 'bcrypt',
  config: { salt: Number(process.env.HASH_SECRET_KEY) },
});
`;
  }
}
