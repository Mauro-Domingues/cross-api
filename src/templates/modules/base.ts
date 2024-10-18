import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export abstract class BaseTemplateModule {
  protected readonly baseNames: Pick<
    IModuleNameDTO,
    'pluralLowerModuleName' | 'lowerModuleName'
  >;

  public constructor(
    names: Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    this.baseNames = fatherNames ?? names;
  }
}
