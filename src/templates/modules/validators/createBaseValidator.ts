export class CreateBaseValidator {
  public execute(): string {
    return `import { celebrate, Joi, CelebrateOptions, SchemaOptions } fr\om 'celebrate';
import { RequestHandler } fr\om 'express';

export const baseValidator = (
  requestRules: (ctx: typeof Joi) => SchemaOptions,
  joiOpts?: Joi.ValidationOptions,
  celebrateOpts?: CelebrateOptions,
): RequestHandler<never, never, never, never> => {
  return celebrate(requestRules(Joi), joiOpts, celebrateOpts);
};
`;
  }
}
