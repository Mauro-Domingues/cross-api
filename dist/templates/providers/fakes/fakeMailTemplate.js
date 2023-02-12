"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFakeMailTemplate = createFakeMailTemplate;
function createFakeMailTemplate() {
  return `import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
`;
}