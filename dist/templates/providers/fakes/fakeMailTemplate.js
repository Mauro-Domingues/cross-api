"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFakeMailTemplate = void 0;
class CreateFakeMailTemplate {
    execute() {
        return `import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
`;
    }
}
exports.CreateFakeMailTemplate = CreateFakeMailTemplate;
