"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createINotificationDTO;
function createINotificationDTO() {
  return `export default interface ISendNotificationlDTO {
  name: string;
  device_id: string;
  headings: string;
  content: string;
}
`;
}