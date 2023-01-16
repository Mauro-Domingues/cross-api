"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeLeadProvider;
var _fs = _interopRequireDefault(require("fs"));
var _leadConfig = _interopRequireDefault(require("../../../../dist/templates/providers/config/leadConfig"));
var _ILeadDTO = _interopRequireDefault(require("../../../../dist/templates/providers/dtos/ILeadDTO"));
var _fakeLead = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeLead"));
var _RDStationLead = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/RDStationLead"));
var _leadIndex = _interopRequireDefault(require("../../../../dist/templates/providers/leadIndex"));
var _ILead = _interopRequireDefault(require("../../../../dist/templates/providers/models/ILead"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeLeadProvider() {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/config')) {
    _fs.default.mkdirSync('src/config');
  }
  if (!_fs.default.existsSync('src/shared')) {
    _fs.default.mkdirSync('src/shared');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/shared/container/providers')) {
    _fs.default.mkdirSync('src/shared/container/providers');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider')) {
    _fs.default.mkdirSync('src/shared/container/providers/LeadProvider');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider/dtos')) {
    _fs.default.mkdirSync('src/shared/container/providers/LeadProvider/dtos');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider/fakes')) {
    _fs.default.mkdirSync('src/shared/container/providers/LeadProvider/fakes');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider/implementations')) {
    _fs.default.mkdirSync('src/shared/container/providers/LeadProvider/implementations');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider/models')) {
    _fs.default.mkdirSync('src/shared/container/providers/LeadProvider/models');
  }
  _fs.default.appendFile('src/shared/container/providers/index.ts', `\nimport './LeadProvider';`, error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync('src/config/lead.ts')) {
    _fs.default.appendFile('src/config/lead.ts', (0, _leadConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/config/lead.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/config/lead.ts', (0, _leadConfig.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts')) {
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts', (0, _ILeadDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts', (0, _ILeadDTO.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts', (0, _fakeLead.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts', (0, _fakeLead.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts', (0, _RDStationLead.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts', (0, _RDStationLead.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts', (0, _ILead.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/models/ILeadProvider.ts', (0, _ILead.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/LeadProvider/index.ts')) {
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/index.ts', (0, _leadIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/LeadProvider/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/LeadProvider/index.ts', (0, _leadIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- LeadProvider ${_messages.default.created}`, '\x1b[0m');
}