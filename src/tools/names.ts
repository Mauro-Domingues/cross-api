import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { Pluralize } from '@tools/pluralize';

export class GetNames {
  private readonly pluralize: Pluralize;
  private readonly concat: Concat;

  public constructor(private readonly name: string | undefined) {
    this.pluralize = new Pluralize(this.name);
    this.concat = Concat.getInstance();
  }

  private getSingularAndPlural(word: string): {
    singular: string;
    pluralName: string;
  } {
    if (this.pluralize.isSingular()) {
      return {
        singular: word,
        pluralName: this.pluralize.plural(),
      };
    }
    return {
      singular: this.pluralize.singular(),
      pluralName: word,
    };
  }

  public execute(): IModuleNameDTO | undefined {
    if (!this.name) {
      return undefined;
    }

    const { singular, pluralName } = this.getSingularAndPlural(this.name);

    const lowerModuleName =
      singular.charAt(0).toLowerCase() + singular.slice(1);

    const upperModuleName =
      singular.charAt(0).toUpperCase() + singular.slice(1);

    const pluralLowerModuleName =
      pluralName.charAt(0).toLowerCase() + pluralName.slice(1);

    const pluralUpperModuleName =
      pluralName.charAt(0).toUpperCase() + pluralName.slice(1);

    const dbModuleName = pluralLowerModuleName.replace(/[A-Z]/g, letter =>
      this.concat.execute('_', letter.toLowerCase()),
    );

    const routeModuleName = pluralLowerModuleName.replace(/[A-Z]/g, letter =>
      this.concat.execute('-', letter.toLowerCase()),
    );

    return {
      lowerModuleName,
      upperModuleName,
      pluralLowerModuleName,
      pluralUpperModuleName,
      dbModuleName,
      routeModuleName,
    };
  }
}
