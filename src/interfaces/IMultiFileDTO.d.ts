export type IMultiFileDTO = readonly [
  readonly Array<string>,
  readonly {
    readonly execute(): string;
  },
];
