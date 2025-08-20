import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Pluralize } from '@tools/pluralize';

export class GetNames {
  private readonly upperCasePattern: RegExp;
  private readonly pluralize: Pluralize;

  public constructor(private readonly name: string | undefined) {
    this.pluralize = new Pluralize(this.name);
    this.upperCasePattern = /([A-Z])/g;
  }

  private getSingularAndPlural(word: string): {
    singular: string;
    plural: string;
  } {
    if (this.pluralize.isSingular()) {
      return {
        singular: word,
        plural: this.pluralize.plural(),
      };
    }
    return {
      singular: this.pluralize.singular(),
      plural: word,
    };
  }

  private getWordFragments({
    plural,
    singular,
  }: {
    singular: string;
    plural: string;
  }): {
    singularFirstLetter: string;
    singularRestWord: string;
    pluralFirstLetter: string;
    pluralRestWord: string;
  } {
    return {
      singularFirstLetter: singular.charAt(0),
      singularRestWord: singular.slice(1),
      pluralFirstLetter: plural.charAt(0),
      pluralRestWord: plural.slice(1),
    };
  }

  private getWords({
    pluralFirstLetter,
    pluralRestWord,
    singularFirstLetter,
    singularRestWord,
  }: {
    singularFirstLetter: string;
    singularRestWord: string;
    pluralFirstLetter: string;
    pluralRestWord: string;
  }): IModuleNameDTO {
    const pluralLowerModuleName =
      pluralFirstLetter.toLowerCase() + pluralRestWord;
    return {
      lowerModuleName: singularFirstLetter.toLowerCase() + singularRestWord,
      upperModuleName: singularFirstLetter.toUpperCase() + singularRestWord,
      pluralLowerModuleName,
      pluralUpperModuleName: pluralFirstLetter.toUpperCase() + pluralRestWord,
      dbModuleName: pluralLowerModuleName
        .replace(this.upperCasePattern, '_$1')
        .toLowerCase(),
      routeModuleName: pluralLowerModuleName
        .replace(this.upperCasePattern, '-$1')
        .toLowerCase(),
    };
  }

  public execute(): IModuleNameDTO | undefined {
    if (!this.name) {
      return undefined;
    }

    const singularAndPlural = this.getSingularAndPlural(this.name);
    const wordFragments = this.getWordFragments(singularAndPlural);
    return this.getWords(wordFragments);
  }
}
