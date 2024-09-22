import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateMailConfig } from '@templates/providers/config/mailConfig';
import { CreateIMailDTO } from '@templates/providers/dtos/IMailDTO';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail';
import { CreateNodemailerMail } from '@templates/providers/implementations/NodemailerMail';
import { CreateSESMail } from '@templates/providers/implementations/SESMail';
import { CreateMailIndex } from '@templates/providers/mailIndex';
import { CreateIMail } from '@templates/providers/models/IMail';
import { BaseProvider } from '@tools/makeProvider/independent/base';

export class MakeMailProvider extends BaseProvider {
  private readonly createNodemailerMail: CreateNodemailerMail;
  private readonly createMailConfig: CreateMailConfig;
  private readonly createMailIndex: CreateMailIndex;
  private readonly createIMailDTO: CreateIMailDTO;
  private readonly createFakeMail: CreateFakeMail;
  private readonly createSESMail: CreateSESMail;
  private readonly createIMail: CreateIMail;

  public constructor() {
    super();
    this.createNodemailerMail = new CreateNodemailerMail();
    this.createMailConfig = new CreateMailConfig();
    this.createMailIndex = new CreateMailIndex();
    this.createIMailDTO = new CreateIMailDTO();
    this.createFakeMail = new CreateFakeMail();
    this.createSESMail = new CreateSESMail();
    this.createIMail = new CreateIMail();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'shared', 'container', 'providers', 'MailProvider', 'dtos'],
      ['src', 'shared', 'container', 'providers', 'MailProvider', 'fakes'],
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailProvider',
        'implementations',
      ],
      ['src', 'shared', 'container', 'providers', 'MailProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'mail.ts'], this.createMailConfig];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'dtos',
          'ISendMailDTO.ts',
        ],
        this.createIMailDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailProvider',
        'fakes',
        'FakeMailProvider.ts',
      ],
      this.createFakeMail,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'NodemailerMailProvider.ts',
        ],
        this.createNodemailerMail,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'SESMailProvider.ts',
        ],
        this.createSESMail,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailProvider',
        'models',
        'IMailProvider.ts',
      ],
      this.createIMail,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      "import './MailProvider';\n",
    );

    return [
      ['src', 'shared', 'container', 'providers', 'MailProvider', 'index.ts'],
      this.createMailIndex,
    ];
  }
}
