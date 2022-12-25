export default function createNotificationConfig(): string {
  return `export default {
  onesignal: {
    options: {
      host: 'onesignal.com',
      port: 443,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: \`Basic \${process.env.OS_TOKEN}\`,
      },
      path: '/api/v1/notifications',
      method: 'POST',
    },
  },
};
`;
}
