export class CreateHashConfig {
  public execute(): string {
    return `import { Joi } ${'from'} 'celebrate';

interface IHashConfigDTO {
  readonly driver: 'bcrypt';
  readonly config: { readonly salt: number | string };
}

const hashValidator = Joi.object<IHashConfigDTO>({
  driver: Joi.string().valid('bcrypt').required(),
  config: Joi.object<IHashConfigDTO['config']>({
    salt: Joi.alternatives()
      .try(Joi.number().integer().positive().min(1), Joi.string().min(1))
      .required(),
  }).required(),
});

export const hashConfig = Object.freeze<IHashConfigDTO>({
  driver: 'bcrypt',
  config: { salt: Number(process.env.HASH_SECRET_KEY) },
});

hashValidator.validateAsync(hashConfig);
`;
  }
}
