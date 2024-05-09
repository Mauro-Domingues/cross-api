declare namespace NodeJS {
  export interface Process {
    readonly argv: readonly [
      readonly string,
      readonly string,
      readonly (keyof import('../interfaces/IActionDTO.js').IActionDTO),
      ...(readonly Array<string>),
    ];
  }
}
