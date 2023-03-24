"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeLeadProvider = void 0;
const fs_1 = require("fs");
const leadConfig_1 = require("@templates/providers/config/leadConfig");
const ILeadDTO_1 = require("@templates/providers/dtos/ILeadDTO");
const fakeLead_1 = require("@templates/providers/fakes/fakeLead");
const RDStationLead_1 = require("@templates/providers/implementations/RDStationLead");
const leadIndex_1 = require("@templates/providers/leadIndex");
const ILead_1 = require("@templates/providers/models/ILead");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeLeadProvider {
    constructor() {
        this.messages = new messages_1.Messages().execute();
        this.createILead = new ILead_1.CreateILead();
        this.createILeadDTO = new ILeadDTO_1.CreateILeadDTO();
        this.createRDStationLead = new RDStationLead_1.CreateRDStationLead();
        this.createFakeLead = new fakeLead_1.CreateFakeLead();
        this.createLeadConfig = new leadConfig_1.CreateLeadConfig();
        this.createLeadIndex = new leadIndex_1.CreateLeadIndex();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'config'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'dtos'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'dtos'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'fakes'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'fakes'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'implementations'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'implementations'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'models'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'models'));
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), `import './LeadProvider';\n`);
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', 'lead.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'lead.ts'), this.createLeadConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'config', 'lead.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'lead.ts'), this.createLeadConfig.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'), this.createILeadDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'), this.createILeadDTO.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'), this.createFakeLead.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'), this.createFakeLead.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'), this.createRDStationLead.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'), this.createRDStationLead.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'), this.createILead.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'), this.createILead.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'index.ts'), this.createLeadIndex.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'LeadProvider', 'index.ts'), this.createLeadIndex.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- LeadProvider ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeLeadProvider = MakeLeadProvider;
