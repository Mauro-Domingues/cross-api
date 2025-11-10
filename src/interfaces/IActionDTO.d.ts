import type { Board } from '@tools/board';
import type { ConfigJson } from '@tools/config';
import type { ConfigLanguage } from '@tools/languageConfig';
import type { ListProvider } from '@tools/listProvider';
import type { CreateApi } from '@tools/makeApi/index';
import type { CreateModule } from '@tools/makeModule/index';
import type { CreateProvider } from '@tools/makeProvider/index';

export interface IActionDTO {
  readonly 'make:provider': () => CreateProvider;
  readonly 'list:provider': () => ListProvider;
  readonly 'make:module': () => CreateModule;
  readonly language: () => ConfigLanguage;
  readonly 'make:api': () => CreateApi;
  readonly config: () => ConfigJson;
  readonly revert: () => {
    readonly execute: () => void;
  };
  readonly help: () => Board;
}
