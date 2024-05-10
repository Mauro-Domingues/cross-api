import { IBoardDTO } from '@interfaces/IMessageDTO/IBoardDTO';
import { IComandDTO } from '@interfaces/IMessageDTO/IComandDTO';
import { IDependencyDTO } from '@interfaces/IMessageDTO/IDependencyDTO';
import { ILanguageDTO } from '@interfaces/IMessageDTO/ILanguageDTO';
import { IMApperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import { IMarketplaceToolDTO } from '@interfaces/IMessageDTO/IMarketplaceToolDTO';
import { IModuleDTO } from '@interfaces/IMessageDTO/IModuleDTO';
import { IProviderDTO } from '@interfaces/IMessageDTO/IProviderDTO';

export interface IMessageDTO {
  readonly marketplaceTool: IMarketplaceToolDTO;
  readonly dependencies: IDependencyDTO;
  readonly providers: IProviderDTO;
  readonly language: ILanguageDTO;
  readonly modules: IModuleDTO;
  readonly comands: IComandDTO;
  readonly mappers: IMApperDTO;
  readonly board: IBoardDTO;
}
