"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateILead = void 0;
class CreateILead {
    execute() {
        return `import ICreateLeadDTO from '../dtos/ICreateLeadDTO';

export default interface ILeadProvider {
  createLead(email: string): Promise<ICreateLeadDTO | undefined>;
}
`;
    }
}
exports.CreateILead = CreateILead;
