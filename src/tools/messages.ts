export interface IMessagesDTO {
  readonly language: string;
  readonly invalidLanguage: string;
  readonly answer: string;
  readonly choice: string;
  readonly created: string;
  readonly reversed: string;
  readonly noReversed: string;
  readonly configured: string;
  readonly providerNotFound: string;
  readonly moduleNotFound: string;
  readonly apiCreated: string;
  readonly available: string;
  readonly notFound: string;
  readonly try: readonly [string, string, string];
  readonly yarn: string;
  readonly dependencies: string;
  readonly devDependencies: string;
  readonly marketplaceTool: readonly [string, string];
  readonly installed: string;
  readonly comandTitle: string;
  readonly tools: string;
  readonly comands: string;
  readonly changeLanguage: string;
  readonly listProvider: string;
  readonly structure: string;
  readonly makeApi: string;
  readonly makeModule: string;
  readonly makeModuleD: string;
  readonly makeProvider: string;
  readonly makeProviderD: string;
  readonly undo: string;
  readonly mapAndClone: string;
  readonly mapAndPatch: string;
  readonly patchAndInsert: string;
  readonly mapAndUpdate: string;
  readonly mapAndPatchString: string;
  readonly mapAndUpdateString: string;
}

export class Messages {
  private readonly messages: IMessagesDTO;

  public constructor() {
    this.messages = {
      language: '➤  Which language do you prefer?',
      invalidLanguage: ' is not a valid option',
      answer: 'Your answer: ',
      choice: '➤  You chose the language: ',
      created: 'created',
      reversed: 'undo',
      noReversed: '➤  There are no commands to undo',
      configured: 'Already configured',
      providerNotFound: 'provider not found',
      moduleNotFound: 'module not found',
      apiCreated: '➤  Api structure created',
      available: 'not available yet',
      notFound: '➤  No commands detected',
      try: [
        '➤  Execute   ',
        'yarn cross comands   ',
        'to see available commands   ',
      ],
      yarn: '==============={ Installing Yarn }===============',
      dependencies: '==========={ Installing Dependencies }===========',
      devDependencies: '====={ Installing Development Dependencies }=====',
      marketplaceTool: ['Download   ', 'to help you   '],
      installed: 'installed',
      comandTitle: '=={ COMANDS LIST }===',
      tools: 'TOOLS      ',
      comands: 'It is used to view the available commands        ',
      changeLanguage: 'It is used to change the language                ',
      listProvider: 'It is used to list the available providers       ',
      structure: 'STRUCTURE CREATION  ',
      makeApi:
        'It is used to generate the structure of your API                           ',
      makeModule:
        'It is used to generate a complete CRUD of an independent module            ',
      makeModuleD:
        'It is used to generate a complete CRUD from one module dependent on another',
      makeProvider:
        'It is used to generate a provider                                          ',
      makeProviderD:
        'It is used to generate a provider inside a module                          ',
      undo: 'It is used to undo the last creation command                               ',
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
    };
  }

  public execute(): IMessagesDTO {
    return this.messages;
  }
}
