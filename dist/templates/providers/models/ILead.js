"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createILead;
function createILead() {
  return `import ICreateLeadDTO from '../dtos/ICreateLeadDTO';

export default interface ILeadProvider {
  createLead(email: string): Promise<ICreateLeadDTO | undefined>;
}
`;
}