import { Pluralize } from '@tools/pluralize.js';

export interface IModuleNamesDTO {
  lowerModuleName: string;
  upperModuleName: string;
  pluralLowerModuleName: string;
  pluralUpperModuleName: string;
  dbModuleName: string;
  routeModuleName: string;
}

export class GetNames {
  private readonly name: string | undefined;
  private readonly pluralize: Pluralize;

  constructor(name: string | undefined) {
    this.pluralize = new Pluralize(name);
    this.name = name;
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

  public execute(): IModuleNamesDTO | undefined {
    if (!this.name) {
      return undefined;
    }

    const { singular, pluralName } = this.getSingularAndPlural(this.name);

    const lowerModuleName = singular.replace(
      singular.charAt(0),
      singular.charAt(0).toLowerCase(),
    );

    const upperModuleName = singular.replace(
      singular.charAt(0),
      singular.charAt(0).toUpperCase(),
    );

    const pluralLowerModuleName = pluralName.replace(
      pluralName.charAt(0),
      pluralName.charAt(0).toLowerCase(),
    );

    const pluralUpperModuleName = pluralName.replace(
      pluralName.charAt(0),
      pluralName.charAt(0).toUpperCase(),
    );

    const dbModuleName = Array.from(pluralLowerModuleName).reduce(
      (accumulator, letter) => {
        if (letter === letter.toUpperCase()) {
          return `${accumulator}_${letter.toLowerCase()}`;
        }
        return `${accumulator}${letter}`;
      },
    );

    const routeModuleName = Array.from(pluralLowerModuleName).reduce(
      (accumulator, letter) => {
        if (letter === letter.toUpperCase()) {
          return `${accumulator}-${letter.toLowerCase()}`;
        }
        return `${accumulator}${letter}`;
      },
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
