"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeLeadProvider = void 0;
var _fs = require("fs");
var _leadConfig = require("../../../../dist/templates/providers/config/leadConfig");
var _ILeadDTO = require("../../../../dist/templates/providers/dtos/ILeadDTO");
var _fakeLead = require("../../../../dist/templates/providers/fakes/fakeLead");
var _RDStationLead = require("../../../../dist/templates/providers/implementations/RDStationLead");
var _leadIndex = require("../../../../dist/templates/providers/leadIndex");
var _ILead = require("../../../../dist/templates/providers/models/ILead");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeLeadProvider {
  constructor() {
    this.messages = void 0;
    this.createILead = void 0;
    this.createILeadDTO = void 0;
    this.createRDStationLead = void 0;
    this.createFakeLead = void 0;
    this.createLeadConfig = void 0;
    this.createLeadIndex = void 0;
    this.messages = _messages.default;
    this.createILead = new _ILead.CreateILead();
    this.createILeadDTO = new _ILeadDTO.CreateILeadDTO();
    this.createRDStationLead = new _RDStationLead.CreateRDStationLead();
    this.createFakeLead = new _fakeLead.CreateFakeLead();
    this.createLeadConfig = new _leadConfig.CreateLeadConfig();
    this.createLeadIndex = new _leadIndex.CreateLeadIndex();
  }
  async execute() {
    if (!(0, _fs.existsSync)('src')) {
      (0, _fs.mkdirSync)('src');
    }
    if (!(0, _fs.existsSync)('src/config')) {
      (0, _fs.mkdirSync)('src/config');
    }
    if (!(0, _fs.existsSync)('src/shared')) {
      (0, _fs.mkdirSync)('src/shared');
    }
    if (!(0, _fs.existsSync)('src/shared/container')) {
      (0, _fs.mkdirSync)('src/shared/container');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers')) {
      (0, _fs.mkdirSync)('src/shared/container/providers');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/LeadProvider');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/dtos')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/LeadProvider/dtos');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/fakes')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/LeadProvider/fakes');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/implementations')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/LeadProvider/implementations');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/models')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/LeadProvider/models');
    }
    (0, _fs.appendFile)('src/shared/container/providers/index.ts', `\nimport './LeadProvider';`, error => {
      if (error) throw error;
    });
    if (!(0, _fs.existsSync)('src/config/lead.ts')) {
      (0, _fs.appendFile)('src/config/lead.ts', this.createLeadConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/config/lead.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/config/lead.ts', this.createLeadConfig.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts', this.createILeadDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts', this.createILeadDTO.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts', this.createFakeLead.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts', this.createFakeLead.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts', this.createRDStationLead.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts', this.createRDStationLead.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts', this.createILead.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts', this.createILead.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/index.ts', this.createLeadIndex.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/LeadProvider/index.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/index.ts', this.createLeadIndex.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- LeadProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeLeadProvider = MakeLeadProvider;