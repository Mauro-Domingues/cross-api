"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateIMailTemplateDTO = void 0;
class CreateIMailTemplateDTO {
  execute() {
    return `interface ITemplateVariablesDTO {
  [key: string]: string | number;
}

export interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariablesDTO;
}
`;
  }
}
exports.CreateIMailTemplateDTO = CreateIMailTemplateDTO;