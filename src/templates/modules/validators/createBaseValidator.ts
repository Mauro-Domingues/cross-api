export class CreateBaseValidator {
  public execute(): string {
    return `import type { CelebrateOptions, SchemaOptions } fr\u006Fm 'celebrate';
import { celebrate, Joi } fr\u006Fm 'celebrate';
import type { RequestHandler } fr\u006Fm 'express';
import type { Root, ValidationOptions } fr\u006Fm 'joi';

export const baseValidator = (
  requestRules: (ctx: Root) => SchemaOptions,
  joiOpts?: ValidationOptions,
  celebrateOpts?: CelebrateOptions,
): RequestHandler<never, never, never, never> => {
  return celebrate(requestRules(Joi), joiOpts, celebrateOpts);
};
`;
  }
}
