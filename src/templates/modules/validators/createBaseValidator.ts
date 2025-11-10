export class CreateBaseValidator {
  public execute(): string {
    return `import {
  celebrate,
  Joi,
  type CelebrateOptions,
  type SchemaOptions,
} fr\om 'celebrate';
import type { Root, ValidationOptions } fr\om 'joi';
import type { RequestHandler } fr\om 'express';

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
