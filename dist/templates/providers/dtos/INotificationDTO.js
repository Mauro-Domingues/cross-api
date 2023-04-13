"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateINotificationDTO = void 0;
class CreateINotificationDTO {
    execute() {
        return `export interface ISendNotificationDTO {
  name: string;
  device_id: string;
  headings: string;
  content: string;
}
`;
    }
}
exports.CreateINotificationDTO = CreateINotificationDTO;
