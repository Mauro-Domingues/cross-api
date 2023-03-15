"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateILeadDTO = void 0;
class CreateILeadDTO {
  execute() {
    return `export default interface ICreateLeadDTO {
  event_uuid: string;
}
`;
  }
}
exports.CreateILeadDTO = CreateILeadDTO;