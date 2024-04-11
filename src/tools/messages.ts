import { IMessageDTO } from '@interfaces/IMessageDTO';

export class Messages {
  private readonly messages: IMessageDTO;

  public constructor() {
    this.messages = {
      board: {
        headers: {
          title: '=={ COMANDS LIST }===',
          structure: 'STRUCTURE CREATION',
          tools: 'TOOLS',
        },
        description: {
          comands: 'It is used to view the available commands',
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
          notFound: 'provider not found',
        },
      },
      modules: {
        errors: { notFound: 'module not found' },
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
      marketplaceTool: {
        description: { action: 'Download   ', info: 'to help you   ' },
      },
      comands: {
        description: {
          created: 'created',
          apiCreated: '➤  Api structure created',
          reversed: 'undo',
          configured: 'Already configured',
          attempt: {
            action: '➤  Execute   ',
            comand: 'yarn cross comands   ',
            info: 'to see available commands   ',
          },
        },
        answer: 'Your answer: ',
        errors: {
          notReversed: '➤  There are no commands to undo',
          notAvailable: 'not available yet',
          notFound: '➤  No commands detected',
          invalidOption: ' is not a valid option',
        },
      },
      mappers: {
        description: {
          mapAndClone:
            'CLONE VALUES -> Receives as parameter a key array and another object of type { [key: string]: unknown }, returns an array of objects with the same value, is useful for queries find WHERE + OR.',
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

  public execute(): IMessageDTO {
    return this.messages;
  }
}
