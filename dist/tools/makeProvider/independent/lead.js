"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLeadProvider = makeLeadProvider;
var _fs = require("fs");
var _leadConfig = require("../../../../dist/templates/providers/config/leadConfig");
var _ILeadDTO = require("../../../../dist/templates/providers/dtos/ILeadDTO");
var _fakeLead = require("../../../../dist/templates/providers/fakes/fakeLead");
var _RDStationLead = require("../../../../dist/templates/providers/implementations/RDStationLead");
var _leadIndex = require("../../../../dist/templates/providers/leadIndex");
var _ILead = require("../../../../dist/templates/providers/models/ILead");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeLeadProvider() {
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
    (0, _fs.appendFile)('src/config/lead.ts', (0, _leadConfig.createLeadConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/lead.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/lead.ts', (0, _leadConfig.createLeadConfig)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts', (0, _ILeadDTO.createILeadDTO)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts', (0, _ILeadDTO.createILeadDTO)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts', (0, _fakeLead.createFakeLead)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts', (0, _fakeLead.createFakeLead)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts', (0, _RDStationLead.createRDStationLead)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts', (0, _RDStationLead.createRDStationLead)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts', (0, _ILead.createILead)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts', (0, _ILead.createILead)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/LeadProvider/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/index.ts', (0, _leadIndex.createLeadIndex)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/LeadProvider/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/LeadProvider/index.ts', (0, _leadIndex.createLeadIndex)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- LeadProvider ${_messages.default.created}`, '\x1b[0m');
}