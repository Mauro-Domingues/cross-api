export class CreateWebSocketConfig {
  public execute(): string {
    return `import { Joi } fr\u006Fm 'celebrate';

interface IWebSocketConfigDTO {
  readonly driver: 'ws';
}

const webSocketValidator = Joi.object<IWebSocketConfigDTO>({
  driver: Joi.string().valid('ws').required(),
});

export const webSocketConfig = Object.freeze<IWebSocketConfigDTO>({
  driver: 'ws',
});

webSocketValidator.validateAsync(webSocketConfig);
`;
  }
}
