"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContainer = createContainer;
function createContainer() {
  return `import './providers';

import { container } from 'tsyringe';
`;
}