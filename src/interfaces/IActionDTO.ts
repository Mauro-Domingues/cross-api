import { Board } from '@tools/board';
import { ConfigJson } from '@tools/config';
import { ConfigLanguage } from '@tools/languageConfig';
import { ListProvider } from '@tools/listProvider';
import { CreateApi } from '@tools/makeApi';
import { CreateModule } from '@tools/makeModule';
import { CreateProvider } from '@tools/makeProvider';

export interface IActionDTO {
  readonly config: ConfigJson;
  readonly comands: Board;
  readonly language: ConfigLanguage;
  readonly 'list:provider': ListProvider;
  readonly 'make:api': CreateApi;
  readonly 'make:module': CreateModule;
  readonly 'make:provider': CreateProvider;
  readonly revert: {
    readonly execute: () => void;
  };
}
