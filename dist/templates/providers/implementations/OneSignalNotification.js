"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOneSignalNotification = createOneSignalNotification;
function createOneSignalNotification() {
  return `import oneSignalConfig from '@config/notification';
import https from 'https';
import { injectable } from 'tsyringe';

import ISendNotificationlDTO from '../dtos/ISendNotificationDTO';
import INotificationProvider from '../models/INotificationProvider';

@injectable()
class OneSignalProvider implements INotificationProvider {
  public async sendNotification(data: ISendNotificationlDTO): Promise<void> {
    const { device_id } = data;

    const message = {
      app_id: process.env.OS_APP_ID,
      headings: { en: data.headings },
      contents: {
        en: data.headings,
      },
      include_player_ids: [device_id],
    };

    const options = {
      ...oneSignalConfig.onesignal.options,
    };

    const req = https.request(options, res => {
      res.on('data', dataListener => {
        console.log(\`Response: \${JSON.parse(dataListener)}\`);
      });
    });
    req.on('error', e => {
      console.log(\`ERROR: \${e}\`);
    });

    req.write(JSON.stringify(message));
    req.end();
  }
}

export default OneSignalProvider;
`;
}