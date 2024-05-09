declare module 'readline' {
  export interface Interface {
    readonly question<Answer extends string>(
      readonly query: readonly string,
      readonly callback: readonly ((answer: readonly Answer) => readonly void),
    ): readonly void;
  }
}
