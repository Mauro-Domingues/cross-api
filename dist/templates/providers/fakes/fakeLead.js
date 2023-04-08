"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFakeLead = void 0;
class CreateFakeLead {
  execute() {
    return `import { ILeadProviderDTO } from '../models/ILeadProvider';
import { ICreateLeadDTO } from '../dtos/ICreateLeadDTO';

export class FakeLeadProvider implements ILeadProviderDTO {
  private leads: string[] = [];

  public async createLead(email: string): Promise<ICreateLeadDTO | undefined> {
    this.leads.push(email);

    return { event_uuid: 'test' };
  }
}
`;
  }
}
exports.CreateFakeLead = CreateFakeLead;