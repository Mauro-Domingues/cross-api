import { Pluralize } from './pluralize';
export class GetNames {
    name;
    pluralize;
    constructor(name) {
        this.pluralize = new Pluralize(name);
        this.name = name;
    }
    getSingularAndPlural(word) {
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
    execute() {
        if (!this.name) {
            return undefined;
        }
        const { singular, pluralName } = this.getSingularAndPlural(this.name);
        const lowerModuleName = singular.replace(singular.charAt(0), singular.charAt(0).toLowerCase());
        const upperModuleName = singular.replace(singular.charAt(0), singular.charAt(0).toUpperCase());
        const pluralLowerModuleName = pluralName.replace(pluralName.charAt(0), pluralName.charAt(0).toLowerCase());
        const pluralUpperModuleName = pluralName.replace(pluralName.charAt(0), pluralName.charAt(0).toUpperCase());
        const dbModuleName = Array.from(pluralLowerModuleName).reduce((accumulator, letter) => {
            if (letter === letter.toUpperCase()) {
                return `${accumulator}_${letter.toLowerCase()}`;
            }
            return `${accumulator}${letter}`;
        });
        const routeModuleName = Array.from(pluralLowerModuleName).reduce((accumulator, letter) => {
            if (letter === letter.toUpperCase()) {
                return `${accumulator}-${letter.toLowerCase()}`;
            }
            return `${accumulator}${letter}`;
        });
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
