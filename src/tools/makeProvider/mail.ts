import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import type { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateMailConfig } from '@templates/providers/config/mailConfig';
import { CreateIMailContactDTO } from '@templates/providers/dtos/IMailContactDTO';
import { CreateISendMailDTO } from '@templates/providers/dtos/ISendMailDTO';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail';
import { CreateSESMail } from '@templates/providers/implementations/SESMail';
import { CreateSMTPMail } from '@templates/providers/implementations/SMTPMail';
import { CreateMailIndex } from '@templates/providers/mailIndex';
import { CreateIMail } from '@templates/providers/models/IMail';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateMailProvider extends BaseProvider {
  private readonly createIMailContactDTO: CreateIMailContactDTO;
  private readonly createMailConfig: CreateMailConfig;
  private readonly createMailIndex: CreateMailIndex;
  private readonly createSMTPMail: CreateSMTPMail;
  private readonly createFakeMail: CreateFakeMail;
  private readonly createISendMailDTO: CreateISendMailDTO;
  private readonly createSESMail: CreateSESMail;
  private readonly createIMail: CreateIMail;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createIMailContactDTO = new CreateIMailContactDTO();
    this.createMailConfig = new CreateMailConfig();
    this.createMailIndex = new CreateMailIndex();
    this.createSMTPMail = new CreateSMTPMail();
    this.createFakeMail = new CreateFakeMail();
    this.createISendMailDTO = new CreateISendMailDTO();
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
        [this.basePath, 'MailProvider', 'dtos', 'IMailContactDTO.ts'],
        this.createIMailContactDTO,
      ],
      [
        [this.basePath, 'MailProvider', 'dtos', 'ISendMailDTO.ts'],
        this.createISendMailDTO,
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
        [this.basePath, 'MailProvider', 'implementations', 'SMTPProvider.ts'],
        this.createSMTPMail,
      ],
      [
        [this.basePath, 'MailProvider', 'implementations', 'SESProvider.ts'],
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
