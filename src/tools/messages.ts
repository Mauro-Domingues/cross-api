import type { IMessageDTO } from '@interfaces/IMessageDTO';
import type { IBoardDTO } from '@interfaces/IMessageDTO/IBoardDTO';
import type { IDependencyDTO } from '@interfaces/IMessageDTO/IDependencyDTO';
import type { IDocumentationDTO } from '@interfaces/IMessageDTO/IDocumentationDTO';
import type { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
import type { ILanguageDTO } from '@interfaces/IMessageDTO/ILanguageDTO';
import type { IMapperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import type { IModuleDTO } from '@interfaces/IMessageDTO/IModuleDTO';
import type { IProviderDTO } from '@interfaces/IMessageDTO/IProviderDTO';
import type { IMessagesDTO } from '@interfaces/ISingletonDTO';
import { BaseRegister } from '@tools/lastModification/base';

export class Messages extends BaseRegister {
  private readonly messages: IMessageDTO;
  private static instance: IMessagesDTO;

  private constructor() {
    super();
    this.messages = JSON.parse(
      this.fileManager.readFileSync([
        this.basePath,
        'messages',
        'messages.json',
      ]),
    );
  }

  public static getInstance(): IMessagesDTO {
    if (!Messages.instance) {
      Messages.instance = new Messages();
    }
    return Messages.instance;
  }

  public get board(): IBoardDTO {
    return this.messages.board;
  }

  public get language(): ILanguageDTO {
    return this.messages.language;
  }

  public get providers(): IProviderDTO {
    return this.messages.providers;
  }

  public get modules(): IModuleDTO {
    return this.messages.modules;
  }

  public get dependencies(): IDependencyDTO {
    return this.messages.dependencies;
  }

  public get documentation(): IDocumentationDTO {
    return this.messages.documentation;
  }

  public get help(): IHelpDTO {
    return this.messages.help;
  }

  public get mappers(): IMapperDTO {
    return this.messages.mappers;
  }
}
