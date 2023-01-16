"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createContainer;
function createContainer() {
  return `import './providers';

import { container } from 'tsyringe';
`;
}