export class CreateHashConfig {
  public execute(): string {
    return `interface IHashConfigDTO {
  readonly driver: 'bcrypt';
  readonly config: { readonly secret: number };
}

export const hashConfig = Object.freeze<IHashConfigDTO>({
  driver: 'bcrypt',
  config: { secret: Number(process.env.HASH_SECRET_KEY) },
});
`;
  }
}
