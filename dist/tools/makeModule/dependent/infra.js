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
async function makeDependentInfra(names, fatherNames) {
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
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, (0, _moduleDTO.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, (0, _moduleDTO.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, (0, _entity.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, (0, _entity.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, (0, _dependentRepository.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, (0, _dependentRepository.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, (0, _IDependentRepository.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, (0, _IDependentRepository.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, (0, _fakeDependentRepository.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, (0, _fakeDependentRepository.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/routes/${fatherNames.lowerModuleName}Router.ts`)) {
    _fs.default.appendFile(`src/routes/${fatherNames.lowerModuleName}Router.ts`, (0, _fullDependentRoutes.default)(names, fatherNames), error => {
      if (error) throw error;
    });
    _fs.default.appendFile(`src/routes/index.ts`, (0, _indexDependentRouter.default)(fatherNames), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.appendFile(`src/routes/${fatherNames.lowerModuleName}Router.ts`, (0, _dependentRoutes.default)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  _fs.default.appendFile('src/shared/container/index.ts', (0, _dependentInjection.default)(names, fatherNames), error => {
    if (error) throw error;
  });
}