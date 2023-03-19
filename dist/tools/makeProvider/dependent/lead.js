"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentLeadProvider = void 0;
var _fs = require("fs");
var _container = require("../../../../dist/templates/index/container");
var _leadConfig = require("../../../../dist/templates/providers/config/leadConfig");
var _ILeadDTO = require("../../../../dist/templates/providers/dtos/ILeadDTO");
var _fakeLead = require("../../../../dist/templates/providers/fakes/fakeLead");
var _RDStationLead = require("../../../../dist/templates/providers/implementations/RDStationLead");
var _leadIndex = require("../../../../dist/templates/providers/leadIndex");
var _ILead = require("../../../../dist/templates/providers/models/ILead");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _path = require("path");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeDependentLeadProvider {
  constructor(fatherNames) {
    this.messages = void 0;
    this.fatherNames = void 0;
    this.createILead = void 0;
    this.createILeadDTO = void 0;
    this.createRDStationLead = void 0;
    this.createFakeLead = void 0;
    this.createLeadConfig = void 0;
    this.createLeadIndex = void 0;
    this.createContainer = void 0;
    this.messages = _messages.default;
    this.fatherNames = fatherNames;
    this.createILead = new _ILead.CreateILead();
    this.createILeadDTO = new _ILeadDTO.CreateILeadDTO();
    this.createRDStationLead = new _RDStationLead.CreateRDStationLead();
    this.createFakeLead = new _fakeLead.CreateFakeLead();
    this.createLeadConfig = new _leadConfig.CreateLeadConfig();
    this.createLeadIndex = new _leadIndex.CreateLeadIndex();
    this.createContainer = new _container.CreateContainer();
  }
  async execute() {
    if (!this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'config'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), '');
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models'));
    }
    (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`);
    (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), `import './LeadProvider';\n`);
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config', 'lead.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'lead.ts'), this.createLeadConfig.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'config', 'lead.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'lead.ts'), this.createLeadConfig.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'), this.createILeadDTO.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'dtos', 'ICreateLeadDTO.ts'), this.createILeadDTO.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'), this.createFakeLead.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'fakes', 'FakeLeadProvider.ts'), this.createFakeLead.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'), this.createRDStationLead.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'implementations', 'RDStationProvider.ts'), this.createRDStationLead.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'), this.createILead.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'models', 'ILeadProvider.ts'), this.createILead.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'index.ts'), this.createLeadIndex.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'LeadProvider', 'index.ts'), this.createLeadIndex.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- LeadProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeDependentLeadProvider = MakeDependentLeadProvider;