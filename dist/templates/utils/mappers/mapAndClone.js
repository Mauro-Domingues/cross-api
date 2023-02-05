"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMapAndClone;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createMapAndClone() {
  return `import IObjectDTO from "@dtos/IObjectDTO";

/**
 * ${_messages.default.mapAndClone}
 * @param attribute IObjectDTO
 * @param params string[]
 * @returns Promise: IObjectDTO[]
 */
export default async function mapAndCloneAttribute(
  params: string[],
  attribute: IObjectDTO,
): Promise<IObjectDTO[]> {
  const objectArray: IObjectDTO[] = [];
  params.forEach(param => {
    objectArray.push({
      [param]: Object.values(attribute)[0],
    });
  });

  return objectArray;
}
`;
}