"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIMailTemplate = createIMailTemplate;
function createIMailTemplate() {
  return `import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
`;
}