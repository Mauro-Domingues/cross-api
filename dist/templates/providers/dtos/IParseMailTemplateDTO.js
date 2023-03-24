"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIMailTemplateDTO = void 0;
class CreateIMailTemplateDTO {
    execute() {
        return `interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
`;
    }
}
exports.CreateIMailTemplateDTO = CreateIMailTemplateDTO;
