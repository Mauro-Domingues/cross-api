import { CreateICacheDTO } from '@templates/dtos/ICacheDTO';
import { CreateICodeDTO } from '@templates/dtos/ICodeDTO';
import { CreateIExceptionDTO } from '@templates/dtos/IExceptionDTO';
import { CreateIListDTO } from '@templates/dtos/IListDTO';
import { CreateIObjectDTO } from '@templates/dtos/IObjectDTO';
import { CreateIResponseDTO } from '@templates/dtos/IResponseDTO';
import { FileManager } from '@tools/fileManager';

export class CreateDtos {
  private readonly createIExceptionDTO: CreateIExceptionDTO;
  private readonly createIResponseDTO: CreateIResponseDTO;
  private readonly createIObjectDTO: CreateIObjectDTO;
  private readonly createICacheDTO: CreateICacheDTO;
  private readonly createICodeDTO: CreateICodeDTO;
  private readonly createIListDTO: CreateIListDTO;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createIExceptionDTO = new CreateIExceptionDTO();
    this.createIResponseDTO = new CreateIResponseDTO();
    this.createIObjectDTO = new CreateIObjectDTO();
    this.createICacheDTO = new CreateICacheDTO();
    this.fileManager = FileManager.getInstance();
    this.createIListDTO = new CreateIListDTO();
    this.createICodeDTO = new CreateICodeDTO();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'dtos', 'IExceptionDTO.ts'], this.createIExceptionDTO],
      [['src', 'dtos', 'ICacheDTO.ts'], this.createICacheDTO],
      [['src', 'dtos', 'ICodeDTO.ts'], this.createICodeDTO],
      [['src', 'dtos', 'IListDTO.ts'], this.createIListDTO],
      [['src', 'dtos', 'IObjectDTO.ts'], this.createIObjectDTO],
      [['src', 'dtos', 'IResponseDTO.ts'], this.createIResponseDTO],
    ]);
  }
}
