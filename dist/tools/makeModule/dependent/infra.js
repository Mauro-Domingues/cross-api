"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeDependentInfra = void 0;
const container_1 = require("../../../templates/index/container");
const routes_1 = require("../../../templates/index/routes");
const moduleDTO_1 = require("../../../templates/modules/dtos/moduleDTO");
const entity_1 = require("../../../templates/modules/entities/entity");
const dependentInjection_1 = require("../../../templates/modules/inject/dependentInjection");
const dependentRepository_1 = require("../../../templates/modules/repositories/dependentRepository");
const fakeDependentRepository_1 = require("../../../templates/modules/repositories/fakes/fakeDependentRepository");
const IDependentRepository_1 = require("../../../templates/modules/repositories/IDependentRepository");
const dependentRoutes_1 = require("../../../templates/modules/routes/dependentRoutes");
const fullDependentRoutes_1 = require("../../../templates/modules/routes/fullDependentRoutes");
const indexDependentRouter_1 = require("../../../templates/modules/routes/indexDependentRouter");
const fs_1 = require("fs");
const messages_1 = require("../../messages");
const path_1 = require("path");
class MakeDependentInfra {
    constructor(names, fatherNames) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
        this.fatherNames = fatherNames;
        this.createIndexDependentRoute = new indexDependentRouter_1.CreateIndexDependentRoute(this.fatherNames);
        this.createFullDependentRoute = new fullDependentRoutes_1.CreateFullDependentRoute(this.names, this.fatherNames);
        this.createDependentRoute = new dependentRoutes_1.CreateDependentRoute(this.names, this.fatherNames);
        this.createIDependentRepository = new IDependentRepository_1.CreateIDependentRepository(this.names, this.fatherNames);
        this.createDependentFakeRepository = new fakeDependentRepository_1.CreateDependentFakeRepository(this.names, this.fatherNames);
        this.createDependentRepository = new dependentRepository_1.CreateDependentRepository(this.names, this.fatherNames);
        this.createDependentInjection = new dependentInjection_1.CreateDependentInjection(this.names, this.fatherNames);
        this.createEntity = new entity_1.CreateEntity(this.names);
        this.createModuleDTO = new moduleDTO_1.CreateModuleDTO(this.names);
        this.createRoutes = new routes_1.CreateRoutes();
        this.createContainer = new container_1.CreateContainer();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.names || !this.fatherNames) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'routes', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', 'index.ts'), this.createRoutes.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`), this.createModuleDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`), this.createModuleDTO.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`), this.createEntity.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`), this.createEntity.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`), this.createDependentRepository.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`), this.createDependentRepository.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`), this.createIDependentRepository.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`), this.createIDependentRepository.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`), this.createDependentFakeRepository.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`), this.createDependentFakeRepository.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`), this.createFullDependentRoute.execute());
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', 'index.ts'), this.createIndexDependentRoute.execute());
            }
            else {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`), this.createDependentRoute.execute());
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), this.createDependentInjection.execute());
        });
    }
}
exports.MakeDependentInfra = MakeDependentInfra;
