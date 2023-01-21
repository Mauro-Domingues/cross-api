"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentInfra;
var _container = _interopRequireDefault(require("../../../../dist/templates/index/container"));
var _routes = _interopRequireDefault(require("../../../../dist/templates/index/routes"));
var _moduleDTO = _interopRequireDefault(require("../../../../dist/templates/modules/dtos/moduleDTO"));
var _entity = _interopRequireDefault(require("../../../../dist/templates/modules/entities/entity"));
var _dependentInjection = _interopRequireDefault(require("../../../../dist/templates/modules/inject/dependentInjection"));
var _dependentRepository = _interopRequireDefault(require("../../../../dist/templates/modules/repositories/dependentRepository"));
var _fakeDependentRepository = _interopRequireDefault(require("../../../../dist/templates/modules/repositories/fakes/fakeDependentRepository"));
var _IDependentRepository = _interopRequireDefault(require("../../../../dist/templates/modules/repositories/IDependentRepository"));
var _dependentRoutes = _interopRequireDefault(require("../../../../dist/templates/modules/routes/dependentRoutes"));
var _fullDependentRoutes = _interopRequireDefault(require("../../../../dist/templates/modules/routes/fullDependentRoutes"));
var _indexDependentRouter = _interopRequireDefault(require("../../../../dist/templates/modules/routes/indexDependentRouter"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentInfra(moduleData, fatherData) {
  if (!_fs.default.existsSync('src/shared/container/index.ts')) {
    _fs.default.appendFile('src/shared/container/index.ts', (0, _container.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/routes/index.ts')) {
    _fs.default.appendFile('src/routes/index.ts', (0, _routes.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`, (0, _moduleDTO.default)(moduleData.upperModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`, (0, _moduleDTO.default)(moduleData.upperModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`, (0, _entity.default)(moduleData.upperModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`, (0, _entity.default)(moduleData.upperModuleName, moduleData.dbModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`, (0, _dependentRepository.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`, (0, _dependentRepository.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`, (0, _IDependentRepository.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`, (0, _IDependentRepository.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`, (0, _fakeDependentRepository.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`, (0, _fakeDependentRepository.default)(moduleData.lowerModuleName, moduleData.upperModuleName, moduleData.pluralLowerModuleName, moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/routes/${fatherData.lowerModuleName}Router.ts`)) {
    _fs.default.appendFile(`src/routes/${fatherData.lowerModuleName}Router.ts`, (0, _fullDependentRoutes.default)(moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.lowerModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
    _fs.default.appendFile(`src/routes/index.ts`, (0, _indexDependentRouter.default)(fatherData.lowerModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.appendFile(`src/routes/${fatherData.lowerModuleName}Router.ts`, (0, _dependentRoutes.default)(moduleData.upperModuleName, moduleData.pluralLowerModuleName, fatherData.lowerModuleName, fatherData.pluralLowerModuleName), error => {
      if (error) throw error;
    });
  }
  _fs.default.appendFile('src/shared/container/index.ts', (0, _dependentInjection.default)(moduleData.pluralUpperModuleName, fatherData.pluralLowerModuleName), error => {
    if (error) throw error;
  });
}