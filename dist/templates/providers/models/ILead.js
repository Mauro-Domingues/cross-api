"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateILead = void 0;
class CreateILead {
    execute() {
        return `import { ICreateLeadDTO } from '../dtos/ICreateLeadDTO';

export interface ILeadProviderDTO {
  createLead(email: string): Promise<ICreateLeadDTO | undefined>;
}
`;
    }
}
exports.CreateILead = CreateILead;
