export class CreateFakeMessaging {
  public execute(): string {
    return `import type {
  IMessageOptionsDTO,
  IPatternDTO,
  IWritePacketDTO,
} fr\om 'cross-proxy';
import type { Observable } fr\om 'rxjs/internal/Observable';
import { randomUUID } fr\om 'node:crypto';
import { EventEmitter } fr\om 'node:events';
import { AppError } fr\om '@shared/errors/AppError';
import type { IMessagingProvider } fr\om '../models/IMessagingProvider';

export class FakeMessagingProvider implements IMessagingProvider {
  private readonly subscribedReplyTopics: Set<string> = new Set<string>();

  private readonly events: EventEmitter = new EventEmitter();

  private normalizePattern(pattern: IPatternDTO): string {
    if (typeof pattern === 'string' || typeof pattern === 'number') {
      return \`\${pattern}\`;
    }

    const sortedKeys = Object.keys(pattern).sort((a, b) => a.localeCompare(b));
    const parts = sortedKeys.map(key => {
      const value = pattern[key];
      return typeof value === 'string'
        ? \`"\${key}":"\${value}"\`
        : \`"\${key}":\${value}\`;
    });
    return \`{\${parts.join(',')}}\`;
  }

  private getReplyTopic(pattern: string): string {
    return \`\${pattern}.reply\`;
  }

  public close(): Promise<unknown> {
    this.events.removeAllListeners();
    this.subscribedReplyTopics.clear();
    return Promise.resolve();
  }

  public subscribeFrom(pattern: IPatternDTO): void {
    const replyTopic = this.getReplyTopic(this.normalizePattern(pattern));
    this.subscribedReplyTopics.add(replyTopic);
  }

  public send<Input, Output>(
    pattern: IPatternDTO,
    data: Input,
  ): Promise<Output> {
    const topic = this.normalizePattern(pattern);
    const replyTopic = this.getReplyTopic(topic);

    if (!this.subscribedReplyTopics.has(replyTopic)) {
      return Promise.reject(
        new AppError(
          'NOT_SUBSCRIBED',
          \`Cannot send to "\${topic}": call subscribeFrom("\${topic}") first.\`,
        ),
      );
    }

    const replyId = randomUUID();

    return new Promise<Output>((resolve, reject) => {
      const onReply = (packet: IWritePacketDTO<Output>) => {
        if (packet.replyId !== replyId) return;

        this.events.off(replyTopic, onReply);

        if (packet.error) {
          reject((packet as { error: Error }).error);
          return;
        }

        resolve(packet.response as Output | PromiseLike<Output>);
      };

      this.events.on(replyTopic, onReply);

      const writePacket: IWritePacketDTO<Input> = {
        replyId,
        replyTopic,
        response: data,
        isDisposed: false,
      };

      this.events.emit(topic, writePacket);
    });
  }

  public emit<Input>(
    pattern: IPatternDTO,
    data: Input,
    options?: IMessageOptionsDTO,
  ): Observable<unknown> {
    const topic = this.normalizePattern(pattern);
    const replyTopic = this.getReplyTopic(topic);

    const writePacket: IWritePacketDTO<Input> = {
      replyId: options?.replyId?.toString(),
      replyPartition: options?.replyPartition,
      replyTopic,
      response: data,
      isDisposed: true,
    };

    this.events.emit(topic, writePacket);

    return {
      subscribe(observerOrNext?: unknown) {
        const next =
          typeof observerOrNext === 'function'
            ? observerOrNext
            : (
                observerOrNext as { next?: (value: unknown) => void } | null
              )?.next?.bind(observerOrNext);
        const complete =
          typeof observerOrNext === 'object' && observerOrNext !== null
            ? (observerOrNext as { complete?: () => void }).complete?.bind(
                observerOrNext,
              )
            : undefined;

        next?.(writePacket);
        complete?.();

        return { unsubscribe() {} };
      },
    } as unknown as Observable<unknown>;
  }

  public listen<X>(
    pattern: IPatternDTO,
    ...handlers: Array<(data: IWritePacketDTO<X>) => unknown>
  ): void {
    const topic = this.normalizePattern(pattern);

    this.events.on(topic, async (packet: IWritePacketDTO<X>) => {
      await Promise.all(handlers.map(handler => handler(packet)));
    });
  }
}
`;
  }
}
