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
exports.MakeInfra = void 0;
const fs_1 = require("fs");
const container_1 = require("@templates/index/container");
const routes_1 = require("@templates/index/routes");
const moduleDTO_1 = require("@templates/modules/dtos/moduleDTO");
const entity_1 = require("@templates/modules/entities/entity");
const injection_1 = require("@templates/modules/inject/injection");
const fakeRepository_1 = require("@templates/modules/repositories/fakes/fakeRepository");
const IRepository_1 = require("@templates/modules/repositories/IRepository");
const repository_1 = require("@templates/modules/repositories/repository");
const independentRoutes_1 = require("@templates/modules/routes/independentRoutes");
const indexRouter_1 = require("@templates/modules/routes/indexRouter");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeInfra {
    constructor(names) {
        this.names = names;
        this.messages = new messages_1.Messages().execute();
        this.createIndexRoute = new indexRouter_1.CreateIndexRoute(this.names);
        this.createIndependentRoute = new independentRoutes_1.CreateIndependentRoute(this.names);
        this.createIRepository = new IRepository_1.CreateIRepository(this.names);
        this.createFakeRepository = new fakeRepository_1.CreateFakeRepository(this.names);
        this.createRepository = new repository_1.CreateRepository(this.names);
        this.createInjection = new injection_1.CreateInjection(this.names);
        this.createEntity = new entity_1.CreateEntity(this.names);
        this.createModuleDTO = new moduleDTO_1.CreateModuleDTO(this.names);
        this.createRoutes = new routes_1.CreateRoutes();
        this.createContainer = new container_1.CreateContainer();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.names) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'routes', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', 'index.ts'), this.createRoutes.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`), this.createModuleDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'dtos', `I${this.names.upperModuleName}DTO.ts`), this.createModuleDTO.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`), this.createEntity.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'entities', `${this.names.upperModuleName}.ts`), this.createEntity.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`), this.createRepository.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', `${this.names.pluralUpperModuleName}Repository.ts`), this.createRepository.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`), this.createIRepository.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', `I${this.names.pluralUpperModuleName}Repository.ts`), this.createIRepository.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`), this.createFakeRepository.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', 'fakes', `Fake${this.names.pluralUpperModuleName}Repository.ts`), this.createFakeRepository.execute());
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), this.createInjection.execute());
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'routes', `${this.names.lowerModuleName}Router.ts`))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', `${this.names.lowerModuleName}Router.ts`), this.createIndependentRoute.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'routes', `${this.names.lowerModuleName}Router.ts`));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', `${this.names.lowerModuleName}Router.ts`), this.createIndependentRoute.execute());
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', 'index.ts'), this.createIndexRoute.execute());
        });
    }
}
exports.MakeInfra = MakeInfra;
