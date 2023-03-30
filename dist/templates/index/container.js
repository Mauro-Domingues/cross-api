"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContainer = void 0;
class CreateContainer {
    execute() {
        return `import './providers';

import { container } from 'tsyringe';
`;
    }
}
exports.CreateContainer = CreateContainer;
