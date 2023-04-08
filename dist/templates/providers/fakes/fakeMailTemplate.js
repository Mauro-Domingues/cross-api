"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFakeMailTemplate = void 0;
class CreateFakeMailTemplate {
  execute() {
    return `import { IMailTemplateProviderDTO } from '../models/IMailTemplateProvider';

export class FakeMailTemplateProvider implements IMailTemplateProviderDTO {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}
`;
  }
}
exports.CreateFakeMailTemplate = CreateFakeMailTemplate;