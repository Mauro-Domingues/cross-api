import { Board } from '@tools/board';
import { ConfigJson } from '@tools/config';
import { ConfigLanguage } from '@tools/languageConfig';
import { ListProvider } from '@tools/listProvider';
import { CreateApi } from '@tools/makeApi/index';
import { CreateModule } from '@tools/makeModule/index';
import { CreateProvider } from '@tools/makeProvider/index';

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
