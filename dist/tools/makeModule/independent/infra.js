"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeInfra = makeInfra;
var _fs = require("fs");
var _container = require("../../../../dist/templates/index/container");
var _routes = require("../../../../dist/templates/index/routes");
var _moduleDTO = require("../../../../dist/templates/modules/dtos/moduleDTO");
var _entity = require("../../../../dist/templates/modules/entities/entity");
var _injection = require("../../../../dist/templates/modules/inject/injection");
var _fakeRepository = require("../../../../dist/templates/modules/repositories/fakes/fakeRepository");
var _IRepository = require("../../../../dist/templates/modules/repositories/IRepository");
var _repository = require("../../../../dist/templates/modules/repositories/repository");
var _independentRoutes = require("../../../../dist/templates/modules/routes/independentRoutes");
var _indexRouter = require("../../../../dist/templates/modules/routes/indexRouter");
async function makeInfra(names) {
  if (!(0, _fs.existsSync)('src/shared/container/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/index.ts', (0, _container.createContainer)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/routes/index.ts')) {
    (0, _fs.appendFile)('src/routes/index.ts', (0, _routes.createRoutes)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, (0, _moduleDTO.createModuleDTO)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, (0, _moduleDTO.createModuleDTO)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, (0, _entity.createEntity)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, (0, _entity.createEntity)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, (0, _repository.createRepository)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, (0, _repository.createRepository)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, (0, _IRepository.createIRepository)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, (0, _IRepository.createIRepository)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`)) {
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, (0, _fakeRepository.createFakeRepository)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, (0, _fakeRepository.createFakeRepository)(names), error => {
      if (error) throw error;
    });
  }
  (0, _fs.appendFile)('src/shared/container/index.ts', (0, _injection.createInjection)(names), error => {
    if (error) throw error;
  });
  if (!(0, _fs.existsSync)(`src/routes/${names.lowerModuleName}Router.ts`)) {
    (0, _fs.appendFile)(`src/routes/${names.lowerModuleName}Router.ts`, (0, _independentRoutes.createIndependentRoute)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/routes/${names.lowerModuleName}Router.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/routes/${names.lowerModuleName}Router.ts`, (0, _independentRoutes.createIndependentRoute)(names), error => {
      if (error) throw error;
    });
  }
  (0, _fs.appendFile)(`src/routes/index.ts`, (0, _indexRouter.createIndexRoute)(names), error => {
    if (error) throw error;
  });
}