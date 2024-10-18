import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';

export abstract class BaseTemplateModule {
  protected declare readonly fatherNames:
    | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
    | undefined;
  protected declare readonly names: Pick<
    IModuleNameDTO,
    'pluralLowerModuleName' | 'lowerModuleName'
  >;
  protected readonly baseNames: Pick<
    IModuleNameDTO,
    'pluralLowerModuleName' | 'lowerModuleName'
  >;

  public constructor() {
    this.baseNames = this.fatherNames ?? this.names;
  }
}
