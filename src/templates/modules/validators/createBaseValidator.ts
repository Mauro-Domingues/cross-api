export class CreateBaseValidator {
  public execute(): string {
    return `import { celebrate, Joi, CelebrateOptions, SchemaOptions } fr\om 'celebrate';
import { RequestHandler } fr\om 'express';

export const baseValidator = (
  rulesOrBuilder: (ctx: typeof Joi) => SchemaOptions,
  joiOpts?: Joi.ValidationOptions,
  celebrateOpts?: CelebrateOptions,
): RequestHandler<never, never, never, never> => {
  return celebrate(rulesOrBuilder(Joi), joiOpts, celebrateOpts);
};
`;
  }
}
