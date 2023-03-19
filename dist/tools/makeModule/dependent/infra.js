"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentInfra = void 0;
var _container = require("../../../../dist/templates/index/container");
var _routes = require("../../../../dist/templates/index/routes");
var _moduleDTO = require("../../../../dist/templates/modules/dtos/moduleDTO");
var _entity = require("../../../../dist/templates/modules/entities/entity");
var _dependentInjection = require("../../../../dist/templates/modules/inject/dependentInjection");
var _dependentRepository = require("../../../../dist/templates/modules/repositories/dependentRepository");
var _fakeDependentRepository = require("../../../../dist/templates/modules/repositories/fakes/fakeDependentRepository");
var _IDependentRepository = require("../../../../dist/templates/modules/repositories/IDependentRepository");
var _dependentRoutes = require("../../../../dist/templates/modules/routes/dependentRoutes");
var _fullDependentRoutes = require("../../../../dist/templates/modules/routes/fullDependentRoutes");
var _indexDependentRouter = require("../../../../dist/templates/modules/routes/indexDependentRouter");
var _fs = require("fs");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _path = require("path");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeDependentInfra {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.createIndexDependentRoute = void 0;
    this.createFullDependentRoute = void 0;
    this.createDependentRoute = void 0;
    this.createIDependentRepository = void 0;
    this.createDependentFakeRepository = void 0;
    this.createDependentRepository = void 0;
    this.createDependentInjection = void 0;
    this.createEntity = void 0;
    this.createModuleDTO = void 0;
    this.createRoutes = void 0;
    this.createContainer = void 0;
    this.messages = _messages.default;
    this.names = names;
    this.fatherNames = fatherNames;
    this.createIndexDependentRoute = new _indexDependentRouter.CreateIndexDependentRoute(this.fatherNames);
    this.createFullDependentRoute = new _fullDependentRoutes.CreateFullDependentRoute(this.names, this.fatherNames);
    this.createDependentRoute = new _dependentRoutes.CreateDependentRoute(this.names, this.fatherNames);
    this.createIDependentRepository = new _IDependentRepository.CreateIDependentRepository(this.names, this.fatherNames);
    this.createDependentFakeRepository = new _fakeDependentRepository.CreateDependentFakeRepository(this.names, this.fatherNames);
    this.createDependentRepository = new _dependentRepository.CreateDependentRepository(this.names, this.fatherNames);
    this.createDependentInjection = new _dependentInjection.CreateDependentInjection(this.names, this.fatherNames);
    this.createEntity = new _entity.CreateEntity(this.names);
    this.createModuleDTO = new _moduleDTO.CreateModuleDTO(this.names);
    this.createRoutes = new _routes.CreateRoutes();
    this.createContainer = new _container.CreateContainer();
  }
  async execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'routes', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'routes', 'index.ts'), this.createRoutes.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`), this.createModuleDTO.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`), this.createModuleDTO.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`), this.createEntity.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`), this.createEntity.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`), this.createDependentRepository.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`), this.createDependentRepository.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`), this.createIDependentRepository.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`), this.createIDependentRepository.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`), this.createDependentFakeRepository.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`), this.createDependentFakeRepository.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`), this.createFullDependentRoute.execute());
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'routes', 'index.ts'), this.createIndexDependentRoute.execute());
    } else {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`), this.createDependentRoute.execute());
    }
    (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), this.createDependentInjection.execute());
  }
}
exports.MakeDependentInfra = MakeDependentInfra;