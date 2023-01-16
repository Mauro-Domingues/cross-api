"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMapAndClone;
var _messages = _interopRequireDefault(require("../../../tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createMapAndClone() {
  return `import IObjectDTO from '@dtos/IObjectDTO';

/**
 * ${_messages.default.mapAndClone}
 * @param params string[]
 * @param attribute IObjectDTO
 * @returns Promise: IObjectDTO[]
 */
export default async function mapAndCloneAttribute(
  params: string[],
  attribute: IObjectDTO,
): Promise<IObjectDTO[]> {
  const objectArray: IObjectDTO[] = [];
  params.forEach(param => {
    objectArray.push({
      [param]: attribute.id,
    });
  });

  return objectArray;
}
`;
}