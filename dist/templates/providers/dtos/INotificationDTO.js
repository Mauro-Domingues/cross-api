"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateINotificationDTO = void 0;
class CreateINotificationDTO {
  execute() {
    return `export default interface ISendNotificationlDTO {
  name: string;
  device_id: string;
  headings: string;
  content: string;
}
`;
  }
}
exports.CreateINotificationDTO = CreateINotificationDTO;