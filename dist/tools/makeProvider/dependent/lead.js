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
exports.MakeDependentLeadProvider = void 0;
const fs_1 = require("fs");
const container_1 = require("@templates/index/container");
const leadConfig_1 = require("@templates/providers/config/leadConfig");
const ILeadDTO_1 = require("@templates/providers/dtos/ILeadDTO");
const fakeLead_1 = require("@templates/providers/fakes/fakeLead");
const RDStationLead_1 = require("@templates/providers/implementations/RDStationLead");
const leadIndex_1 = require("@templates/providers/leadIndex");
const ILead_1 = require("@templates/providers/models/ILead");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeDependentLeadProvider {
    constructor(fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.fatherNames = fatherNames;
        this.createILead = new ILead_1.CreateILead();
        this.createILeadDTO = new ILeadDTO_1.CreateILeadDTO();
        this.createRDStationLead = new RDStationLead_1.CreateRDStationLead();
        this.createFakeLead = new fakeLead_1.CreateFakeLead();
        this.createLeadConfig = new leadConfig_1.CreateLeadConfig();
        this.createLeadIndex = new leadIndex_1.CreateLeadIndex();
        this.createContainer = new container_1.CreateContainer();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.fatherNames) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'config'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), '');
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models'));
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`);
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), `import './LeadProvider';\n`);
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', 'lead.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'lead.ts'), this.createLeadConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'config', 'lead.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'lead.ts'), this.createLeadConfig.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'), this.createILeadDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'), this.createILeadDTO.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'), this.createFakeLead.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'), this.createFakeLead.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'), this.createRDStationLead.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'), this.createRDStationLead.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'), this.createILead.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'), this.createILead.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'index.ts'), this.createLeadIndex.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'index.ts'), this.createLeadIndex.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- LeadProvider ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeDependentLeadProvider = MakeDependentLeadProvider;
