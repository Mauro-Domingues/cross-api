"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIMailTemplateDTO;
function createIMailTemplateDTO() {
  return `interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
`;
}