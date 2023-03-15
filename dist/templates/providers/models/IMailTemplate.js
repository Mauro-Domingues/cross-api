"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateIMailTemplate = void 0;
class CreateIMailTemplate {
  execute() {
    return `import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
`;
  }
}
exports.CreateIMailTemplate = CreateIMailTemplate;