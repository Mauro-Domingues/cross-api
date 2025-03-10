import { IHelpDTO } from './IHelpDTO';
import { IBoardDTO } from '@interfaces/IMessageDTO/IBoardDTO';
import { IDependencyDTO } from '@interfaces/IMessageDTO/IDependencyDTO';
import { IDocumentationDTO } from '@interfaces/IMessageDTO/IDocumentationDTO';
import { ILanguageDTO } from '@interfaces/IMessageDTO/ILanguageDTO';
import { IMapperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import { IModuleDTO } from '@interfaces/IMessageDTO/IModuleDTO';
import { IProviderDTO } from '@interfaces/IMessageDTO/IProviderDTO';

export interface IMessageDTO {
  readonly documentation: IDocumentationDTO;
  readonly dependencies: IDependencyDTO;
  readonly providers: IProviderDTO;
  readonly language: ILanguageDTO;
  readonly modules: IModuleDTO;
  readonly mappers: IMapperDTO;
  readonly help: IHelpDTO;
  readonly board: IBoardDTO;
}
