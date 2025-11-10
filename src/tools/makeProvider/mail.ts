import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import type { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateMailConfig } from '@templates/providers/config/mailConfig';
import { CreateIMailDTO } from '@templates/providers/dtos/IMailDTO';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail';
import { CreateSESMail } from '@templates/providers/implementations/SESMail';
import { CreateSMTPMail } from '@templates/providers/implementations/SMTPMail';
import { CreateMailIndex } from '@templates/providers/mailIndex';
import { CreateIMail } from '@templates/providers/models/IMail';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateMailProvider extends BaseProvider {
  private readonly createMailConfig: CreateMailConfig;
  private readonly createMailIndex: CreateMailIndex;
  private readonly createSMTPMail: CreateSMTPMail;
  private readonly createFakeMail: CreateFakeMail;
  private readonly createIMailDTO: CreateIMailDTO;
  private readonly createSESMail: CreateSESMail;
  private readonly createIMail: CreateIMail;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createMailConfig = new CreateMailConfig();
    this.createMailIndex = new CreateMailIndex();
    this.createSMTPMail = new CreateSMTPMail();
    this.createFakeMail = new CreateFakeMail();
    this.createIMailDTO = new CreateIMailDTO();
    this.createSESMail = new CreateSESMail();
    this.createIMail = new CreateIMail();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'MailProvider', 'dtos'],
      [this.basePath, 'MailProvider', 'fakes'],
      [this.basePath, 'MailProvider', 'implementations'],
      [this.basePath, 'MailProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'mail.ts'], this.createMailConfig];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
        [this.basePath, 'MailProvider', 'dtos', 'ISendMailDTO.ts'],
        this.createIMailDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [this.basePath, 'MailProvider', 'fakes', 'FakeMailProvider.ts'],
      this.createFakeMail,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          this.basePath,
          'MailProvider',
          'implementations',
          'SMTPMailProvider.ts',
        ],
        this.createSMTPMail,
      ],
      [
        [
          this.basePath,
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
      [this.basePath, 'MailProvider', 'models', 'IMailProvider.ts'],
      this.createIMail,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './MailProvider';\n",
    );

    return [[this.basePath, 'MailProvider', 'index.ts'], this.createMailIndex];
  }
}
