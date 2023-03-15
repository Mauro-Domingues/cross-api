"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetNames = void 0;
var _pluralize = require("pluralize");
class GetNames {
  constructor(name) {
    this.name = void 0;
    this.name = name;
  }
  getSingularAndPlural(word) {
    if ((0, _pluralize.isSingular)(word)) {
      return {
        singular: word,
        pluralName: (0, _pluralize.plural)(word)
      };
    }
    return {
      singular: (0, _pluralize.singular)(word),
      pluralName: word
    };
  }
  execute() {
    if (!this.name) {
      return undefined;
    }
    const {
      singular,
      pluralName
    } = this.getSingularAndPlural(this.name);
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
      routeModuleName
    };
  }
}
exports.GetNames = GetNames;