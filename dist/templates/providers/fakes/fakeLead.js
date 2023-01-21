"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFakeLead;
function createFakeLead() {
  return `import ILeadProvider from '../models/ILeadProvider';
import ICreateLeadDTO from '../dtos/ICreateLeadDTO';

class FakeLeadProvider implements ILeadProvider {
  private leads: string[] = [];

  public async createLead(email: string): Promise<ICreateLeadDTO | undefined> {
    this.leads.push(email);

    return { event_uuid: 'teste' };
  }
}

export default FakeLeadProvider;
`;
}