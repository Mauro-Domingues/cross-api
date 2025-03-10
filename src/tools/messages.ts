import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IBoardDTO } from '@interfaces/IMessageDTO/IBoardDTO';
import { IDependencyDTO } from '@interfaces/IMessageDTO/IDependencyDTO';
import { IDocumentationDTO } from '@interfaces/IMessageDTO/IDocumentationDTO';
import { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
import { ILanguageDTO } from '@interfaces/IMessageDTO/ILanguageDTO';
import { IMapperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import { IModuleDTO } from '@interfaces/IMessageDTO/IModuleDTO';
import { IProviderDTO } from '@interfaces/IMessageDTO/IProviderDTO';
import { IMessagesDTO } from '@interfaces/ISingletonDTO';

export class Messages {
  private readonly messages: IMessageDTO;
  private static instance: IMessagesDTO;

  private constructor() {
    this.messages = {
      board: {
        headers: {
          title: '=={ COMMANDS LIST }==',
          structure: 'STRUCTURE CREATION',
          tools: 'TOOLS',
        },
        description: {
          help: 'It is used to view the available commands',
          language: 'It is used to change the language',
          'list:provider': 'It is used to list the available providers',
          'make:api': 'It is used to generate the structure of your API',
          'make:module':
            'It is used to generate a complete CRUD of an independent module',
          'make:dependent:module':
            'It is used to generate a complete CRUD from one module dependent on another',
          'make:provider': 'It is used to generate a provider',
          'make:dependent:provider':
            'It is used to generate a provider inside a module',
          revert: 'It is used to undo the last creation command',
        },
      },
      language: {
        headers: { title: 'KEY', description: 'VALUE' },
        options: { enUs: 'english', ptBr: 'portuguese' },
        question: '➤  Which language do you prefer?',
        choice: '➤  You chose the language: ',
      },
      providers: {
        headers: { title: 'NAME', description: 'DESCRIPTION' },
        errors: {
          notFound: 'Provider not found',
        },
      },
      modules: {
        errors: { notFound: 'Module not found' },
      },
      dependencies: {
        headers: {
          yarn: '==================={ Installing Yarn }==================',
          uninstalling:
            '============={ Uninstalling Dependencies }==============',
          dependencies:
            '=============={ Installing Dependencies }===============',
          devDependencies:
            '========={ Installing Development Dependencies }========',
        },
        description: {
          uninstalled: 'uninstalled',
          installed: 'installed',
        },
        question: 'Do you want to uninstall dependencies? (y/n)',
      },
      documentation: {
        description: { action: 'Visit ', info: ' for more info' },
      },
      help: {
        description: {
          created: 'created',
          apiCreated: '➤  Api structure created',
          reversed: 'Undo',
          configured: 'Already configured',
          attempt: {
            action: '➤  Execute ',
            command: 'yarn cross help ',
            info: 'to see available commands',
          },
        },
        answer: 'Your answer: ',
        errors: {
          notReversed: '➤  There are no commands to undo',
          notFound: '➤  No commands detected',
          invalidOption: ' is not a valid option',
        },
      },
      mappers: {
        description: {
          mapAndClone:
            'CLONE VALUES -> Receives as parameter a key array and another object of type unknown, returns an array of objects with the same value, is useful for queries find WHERE + OR.',
          mapAndPatch:
            'PATCH OBJECT -> Takes as parameter an entity and an object, maps the object, and returns the entity with the patched properties. Empty or non-entity-type properties are discarded.',
          patchAndInsert:
            'PATCH AND INSERT -> Takes as a parameter an entity and an object, maps the object and returns the entity with the patched properties. Considers non-entity-type properties but empty values sent are discarded.',
          mapAndUpdate:
            'PUT OBJECT -> Takes as a parameter an entity and an object, maps the object and returns the entity with the updated properties. Considers empty values sent, but non-entity-type properties are discarded.',
          mapAndPatchString:
            'PATCH STRINGIFIED OBJECT -> Takes as parameter a stringified object and another object, converts, maps, and returns the stringified object with the patched properties. Empty or non-entity-type properties are discarded.',
          mapAndUpdateString:
            'PUT STRINGIFIED OBJECT -> Takes as parameter a stringified object and another object, converts, maps, and returns the stringified object with the updated properties. Considers empty values sent, but non-entity-type properties are discarded.',
        },
      },
    };
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
