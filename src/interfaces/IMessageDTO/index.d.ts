import type { IHelpDTO } from './IHelpDTO';
import type { IBoardDTO } from '@interfaces/IMessageDTO/IBoardDTO';
import type { IDependencyDTO } from '@interfaces/IMessageDTO/IDependencyDTO';
import type { IDocumentationDTO } from '@interfaces/IMessageDTO/IDocumentationDTO';
import type { ILanguageDTO } from '@interfaces/IMessageDTO/ILanguageDTO';
import type { IMapperDTO } from '@interfaces/IMessageDTO/IMapperDTO';
import type { IModuleDTO } from '@interfaces/IMessageDTO/IModuleDTO';
import type { IProviderDTO } from '@interfaces/IMessageDTO/IProviderDTO';

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
