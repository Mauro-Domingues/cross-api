import { plural, singular, isSingular } from 'pluralize';

export interface IModuleNamesDTO {
  lowerModuleName: string;
  upperModuleName: string;
  pluralLowerModuleName: string;
  pluralUpperModuleName: string;
  dbModuleName: string;
  routeModuleName: string;
}

export class GetNames {
  private getSingularAndPlural(word: string): {
    singular: string;
    pluralName: string;
  } {
    if (isSingular(word)) {
      return {
        singular: word,
        pluralName: plural(word),
      };
    }
    return {
      singular: singular(word),
      pluralName: word,
    };
  }

  public execute(name: string): IModuleNamesDTO | undefined {
    if (!name) {
      return undefined;
    }

    const { singular, pluralName } = this.getSingularAndPlural(name);

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
