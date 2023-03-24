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
exports.MakeFourthLayer = void 0;
const typeorm_1 = require("@templates/api/typeorm");
const appError_1 = require("@templates/errors/appError");
const container_1 = require("@templates/index/container");
const dataSource_1 = require("@templates/api/dataSource");
const mapAndClone_1 = require("@templates/utils/mappers/mapAndClone");
const mapAndInsert_1 = require("@templates/utils/mappers/mapAndInsert");
const mapAndPatch_1 = require("@templates/utils/mappers/mapAndPatch");
const mapAndPatchString_1 = require("@templates/utils/mappers/mapAndPatchString");
const mapAndUpdate_1 = require("@templates/utils/mappers/mapAndUpdate");
const mapAndUpdateString_1 = require("@templates/utils/mappers/mapAndUpdateString");
const messages_1 = require("@tools/messages");
const fs_1 = require("fs");
const path_1 = require("path");
class MakeFourthLayer {
    constructor() {
        this.messages = new messages_1.Messages().execute();
        this.createMapAndUpdateString = new mapAndUpdateString_1.CreateMapAndUpdateString();
        this.createMapAndUpdate = new mapAndUpdate_1.CreateMapAndUpdate();
        this.createMapAndPatchString = new mapAndPatchString_1.CreateMapAndPatchString();
        this.createMapAndPatch = new mapAndPatch_1.CreateMapAndPatch();
        this.createMapAndInsert = new mapAndInsert_1.CreateMapAndInsert();
        this.createMapAndClone = new mapAndClone_1.CreateMapAndClone();
        this.createDataSource = new dataSource_1.CreateDataSource();
        this.createContainer = new container_1.CreateContainer();
        this.createAppError = new appError_1.CreateAppError();
        this.createTypeorm = new typeorm_1.CreateTypeorm();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'), this.createMapAndClone.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'), this.createMapAndClone.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- mapAndCloneAttribute.ts.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'), this.createMapAndInsert.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'), this.createMapAndInsert.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- mapAndInsertAttribute.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'), this.createMapAndPatch.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'), this.createMapAndPatch.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- mapAndPatchAttribute.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndPatchString.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndPatchString.ts'), this.createMapAndPatchString.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndPatchString.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndPatchString.ts'), this.createMapAndPatchString.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- mapAndPatchString.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'), this.createMapAndUpdate.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'), this.createMapAndUpdate.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- mapAndUpdateAttribute.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndUpdateString.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndUpdateString.ts'), this.createMapAndUpdateString.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndUpdateString.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'utils', 'mappers', 'mapAndUpdateString.ts'), this.createMapAndUpdateString.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- mapAndUpdateString.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- container/index.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'errors', 'AppError.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'errors', 'AppError.ts'), this.createAppError.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'errors', 'AppError.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'errors', 'AppError.ts'), this.createAppError.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- AppError.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'index.ts'), this.createTypeorm.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'index.ts'), this.createTypeorm.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- typeorm/index.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'dataSource.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'dataSource.ts'), this.createDataSource.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'dataSource.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'dataSource.ts'), this.createDataSource.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- dataSource.ts ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeFourthLayer = MakeFourthLayer;
