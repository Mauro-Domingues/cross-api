"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeInfra;
var _fs = _interopRequireDefault(require("fs"));
var _container = _interopRequireDefault(require("../../../../dist/templates/index/container"));
var _routes = _interopRequireDefault(require("../../../../dist/templates/index/routes"));
var _moduleDTO = _interopRequireDefault(require("../../../../dist/templates/modules/dtos/moduleDTO"));
var _entity = _interopRequireDefault(require("../../../../dist/templates/modules/entities/entity"));
var _injection = _interopRequireDefault(require("../../../../dist/templates/modules/inject/injection"));
var _fakeRepository = _interopRequireDefault(require("../../../../dist/templates/modules/repositories/fakes/fakeRepository"));
var _IRepository = _interopRequireDefault(require("../../../../dist/templates/modules/repositories/IRepository"));
var _repository = _interopRequireDefault(require("../../../../dist/templates/modules/repositories/repository"));
var _independentRoutes = _interopRequireDefault(require("../../../../dist/templates/modules/routes/independentRoutes"));
var _indexRouter = _interopRequireDefault(require("../../../../dist/templates/modules/routes/indexRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeInfra(names) {
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
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, (0, _moduleDTO.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, (0, _moduleDTO.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, (0, _entity.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, (0, _entity.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, (0, _repository.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, (0, _repository.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, (0, _IRepository.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, (0, _IRepository.default)(names), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`)) {
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, (0, _fakeRepository.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, (0, _fakeRepository.default)(names), error => {
      if (error) throw error;
    });
  }
  _fs.default.appendFile('src/shared/container/index.ts', (0, _injection.default)(names), error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync(`src/routes/${names.lowerModuleName}Router.ts`)) {
    _fs.default.appendFile(`src/routes/${names.lowerModuleName}Router.ts`, (0, _independentRoutes.default)(names), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/routes/${names.lowerModuleName}Router.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/routes/${names.lowerModuleName}Router.ts`, (0, _independentRoutes.default)(names), error => {
      if (error) throw error;
    });
  }
  _fs.default.appendFile(`src/routes/index.ts`, (0, _indexRouter.default)(names), error => {
    if (error) throw error;
  });
}