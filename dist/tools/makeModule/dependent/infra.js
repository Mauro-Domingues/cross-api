"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDependentInfra = makeDependentInfra;
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
async function makeDependentInfra(names, fatherNames) {
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
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, (0, _moduleDTO.createModuleDTO)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, (0, _moduleDTO.createModuleDTO)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, (0, _entity.createEntity)(names), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, (0, _entity.createEntity)(names), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, (0, _dependentRepository.createDependentRepository)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, (0, _dependentRepository.createDependentRepository)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, (0, _IDependentRepository.createIDependentRepository)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, (0, _IDependentRepository.createIDependentRepository)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`)) {
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, (0, _fakeDependentRepository.createDependentFakeRepository)(names, fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, (0, _fakeDependentRepository.createDependentFakeRepository)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)(`src/routes/${fatherNames.lowerModuleName}Router.ts`)) {
    (0, _fs.appendFile)(`src/routes/${fatherNames.lowerModuleName}Router.ts`, (0, _fullDependentRoutes.createFullDependentRoute)(names, fatherNames), error => {
      if (error) throw error;
    });
    (0, _fs.appendFile)(`src/routes/index.ts`, (0, _indexDependentRouter.createIndexDependentRoute)(fatherNames), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.appendFile)(`src/routes/${fatherNames.lowerModuleName}Router.ts`, (0, _dependentRoutes.createDependentRoute)(names, fatherNames), error => {
      if (error) throw error;
    });
  }
  (0, _fs.appendFile)('src/shared/container/index.ts', (0, _dependentInjection.createDependentInjection)(names, fatherNames), error => {
    if (error) throw error;
  });
}