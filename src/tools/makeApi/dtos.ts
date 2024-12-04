import { CreateICacheDTO } from '@templates/dtos/ICacheDTO';
import { CreateICodeDTO } from '@templates/dtos/ICodeDTO';
import { CreateIExceptionDTO } from '@templates/dtos/IExceptionDTO';
import { CreateIIntervalDTO } from '@templates/dtos/IIntervalDTO';
import { CreateIListDTO } from '@templates/dtos/IListDTO';
import { CreateIObjectDTO } from '@templates/dtos/IObjectDTO';
import { CreateIResponseDTO } from '@templates/dtos/IResponseDTO';
import { FileManager } from '@tools/fileManager';

export class CreateDtos {
  private readonly createIExceptionDTO: CreateIExceptionDTO;
  private readonly createIIntervalDTO: CreateIIntervalDTO;
  private readonly createIResponseDTO: CreateIResponseDTO;
  private readonly createIObjectDTO: CreateIObjectDTO;
  private readonly createICacheDTO: CreateICacheDTO;
  private readonly createICodeDTO: CreateICodeDTO;
  private readonly createIListDTO: CreateIListDTO;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createIExceptionDTO = new CreateIExceptionDTO();
    this.createIIntervalDTO = new CreateIIntervalDTO();
    this.createIResponseDTO = new CreateIResponseDTO();
    this.createIObjectDTO = new CreateIObjectDTO();
    this.createICacheDTO = new CreateICacheDTO();
    this.fileManager = FileManager.getInstance();
    this.createIListDTO = new CreateIListDTO();
    this.createICodeDTO = new CreateICodeDTO();
  }

  public execute(): void {
    const basePath = this.fileManager.resolvePath(['src', 'dtos']);

    return this.fileManager.checkAndCreateMultiFile([
      [[basePath, 'IExceptionDTO.ts'], this.createIExceptionDTO],
      [[basePath, 'ICacheDTO.ts'], this.createICacheDTO],
      [[basePath, 'ICodeDTO.ts'], this.createICodeDTO],
      [[basePath, 'IIntervalDTO.ts'], this.createIIntervalDTO],
      [[basePath, 'IListDTO.ts'], this.createIListDTO],
      [[basePath, 'IObjectDTO.ts'], this.createIObjectDTO],
      [[basePath, 'IResponseDTO.ts'], this.createIResponseDTO],
    ]);
  }
}
