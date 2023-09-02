import { IMessagesDTO } from '@tools/messages';

export class PortugueseMessages {
  public messages: IMessagesDTO;

  constructor() {
    this.messages = {
      language: '➤  Qual linguagem você prefere?',
      invalidLanguage: ' não é uma opção válida',
      answer: 'Sua resposta: ',
      choice: '➤  Você escolheu a linguagem: ',
      created: 'criado',
      reversed: 'desfazer',
      noReversed: '➤  Não há comandos para desfazer',
      configured: 'Já configurado',
      providerNotFound: 'provedor não encontrado',
      moduleNotFound: 'módulo não encontrado',
      apiCreated: '➤  Estrutura da api criada',
      available: 'Ainda não disponível',
      notFound: '➤  Nenhum comando detectado',
      try: [
        '➤  Execute   ',
        'yarn cross comands   ',
        'para ver os comandos disponíveis   ',
      ],
      yarn: '==================={ Instalando Yarn }==================',
      dependencies: '=============={ Instalando Dependências }===============',
      devDependencies:
        '====={ Instalando Dependências de Desenvolvimento }=====',
      marketplaceTool: ['Instale   ', 'para te ajudar   '],
      installed: 'instalado',
      comandTitle: '{ LISTA DE COMANDOS }',
      tools: 'FERRAMENTAS',
      comands: 'É usado para visualizar os comandos disponíveis  ',
      changeLanguage: 'É usado para alterar o idioma                    ',
      listProvider: 'É utilizado para listar os provedores disponíveis',
      migrationGenerate:
        'É utilizado para gerar ou atualizar migrações                              ',
      migrationRun:
        'É utilizado para rodar as migrações                                        ',
      structure: 'CRIAÇÃO DA ESTRUTURA',
      makeApi:
        'É utilizado para gerar a estrutura da sua API                              ',
      makeModule:
        'É utilizado para gerar um CRUD completo de um módulo independente          ',
      makeModuleD:
        'É usado para gerar um CRUD completo de um módulo dependente de outro       ',
      makeProvider:
        'É utilizado para gerar um provedor                                         ',
      makeProviderD:
        'É usado para criar um provedor dentro de um módulo                         ',
      undo: 'É usado para desfazer o último comando de criação                          ',
      mapAndClone:
        'CLONE VALUES -> Recebe como parâmetro um array de string e outro objeto do tipo { [key: string]: string }, retorna um array de objetos com o mesmo valor, é útil para consultas find WHERE + OR.',
      mapAndPatch:
        'PATCH OBJECT -> Recebe como parâmetro uma entidade e um objeto, mapeia o objeto e retorna a entidade com as propriedades corrigidas. Propriedades vazias ou não pertencentes ao tipo da entidade são descartadas.',
      patchAndInsert:
        'PATCH AND INSERT -> Recebe como parâmetro uma entidade e um objeto, mapeia o objeto e retorna a entidade com as propriedades corrigidas. Considera propriedades não pertencentes ao tipo da entidade mas valores vazios são descartados.',
      mapAndUpdate:
        'PUT OBJECT -> Recebe como parâmetro uma entidade e um objeto, mapeia o objeto e retorna a entidade com as propriedades atualizadas. Considera valores vazios enviados mas propriedades não pertencentes ao tipo da entidade são descartadas.',
      mapAndPatchString:
        'PATCH STRINGIFIED OBJECT -> Recebe como parâmetro um objeto em formato de string e outro objeto, converte, mapeia, e retorna o objeto em formato de string com as propriedades corrigidas. Propriedades vazias ou não pertencentes ao tipo da entidade são descartadas.',
      mapAndUpdateString:
        'PUT STRINGIFIED OBJECT -> Recebe como parâmetro um objeto em formato de string e outro objeto, converte, mapeia, e retorna o objeto em formato de string com as propriedades atualizadas. Considera valores vazios enviados, mas as propriedades que não pertencem ao tipo de entidade são descartadas.',
    };
  }

  execute(): IMessagesDTO {
    return this.messages;
  }
}
