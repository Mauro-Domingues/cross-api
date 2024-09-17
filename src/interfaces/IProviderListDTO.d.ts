import { IProviderOptionDTO } from '@interfaces/IProviderOptionDTO';

export type IProviderListDTO = readonly Record<
  IProviderOptionDTO,
  {
    readonly independent: { readonly execute: () => void };
    readonly dependent: { readonly execute: () => void };
    readonly devDependencies: Array<string>;
    readonly dependencies: Array<string>;
    readonly name: IProviderOptionDTO;
    readonly description: string;
  }
>;
