import { IMessageDTO } from '@interfaces/IMessageDTO';

export class PortugueseMessages {
  private readonly messages: IMessageDTO;

  public constructor() {
    this.messages = {
      board: {
        headers: {
          title: '{ LISTA DE COMANDOS }',
          structure: 'CRIAÇÃO DA ESTRUTURA',
          tools: 'FERRAMENTAS',
        },
        description: {
          comands: 'É usado para visualizar os comandos disponíveis',
          language: 'É usado para alterar o idioma',
          'list:provider': 'É utilizado para listar os provedores disponíveis',
          'make:api': 'É utilizado para gerar a estrutura da sua API',
          'make:module':
            'É utilizado para gerar um CRUD completo de um módulo independente',
          'make:dependent:module':
            'É usado para gerar um CRUD completo de um módulo dependente de outro',
          'make:provider': 'É utilizado para gerar um provedor',
          'make:dependent:provider':
            'É usado para criar um provedor dentro de um módulo',
          revert: 'É usado para desfazer o último comando de criação',
        },
      },
      language: {
        headers: { title: 'CHAVE', description: 'VALOR' },
        options: { ptBr: 'português', enUs: 'inglês' },
        question: '➤  Qual linguagem você prefere?',
        choice: '➤  Você escolheu a linguagem: ',
      },
      providers: {
        headers: { title: 'NOME', description: 'DESCRIÇÃO' },
        errors: {
          notFound: 'Provedor não encontrado',
        },
      },
      modules: {
        errors: { notFound: 'Módulo não encontrado' },
      },
      dependencies: {
        headers: {
          yarn: '==================={ Instalando Yarn }==================',
          uninstalling:
            '============={ Desinstalando Dependências }=============',
          dependencies:
            '=============={ Instalando Dependências }===============',
          devDependencies:
            '====={ Instalando Dependências de Desenvolvimento }=====',
        },
        description: {
          uninstalled: 'desinstalado',
          installed: 'instalado',
        },
        question: 'Você quer desinstalar as dependências? (y/n)',
      },
      documentation: {
        description: { action: 'Visite ', info: ' para mais informações' },
      },
      comands: {
        description: {
          created: 'criado',
          apiCreated: '➤  Estrutura da api criada',
          reversed: 'Desfazer',
          configured: 'Já configurado',
          attempt: {
            action: '➤  Execute ',
            comand: 'yarn cross comands ',
            info: 'para ver os comandos disponíveis ',
          },
        },
        answer: 'Sua resposta: ',
        errors: {
          notReversed: '➤  Não há comandos para desfazer',
          notFound: '➤  Nenhum comando detectado',
          invalidOption: ' não é uma opção válida',
        },
      },
      mappers: {
        description: {
          mapAndClone:
            'CLONE VALUES -> Recebe como parâmetro um array de chaves e outro objeto do tipo { [key: string]: unknown }, retorna um array de objetos com o mesmo valor, é útil para consultas find WHERE + OR.',
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
        },
      },
    };
  }

  execute(): IMessageDTO {
    return this.messages;
  }
}
