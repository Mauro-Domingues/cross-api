export interface IMApperDTO {
  readonly description: {
    readonly mapAndUpdateString: string;
    readonly mapAndPatchString: string;
    readonly patchAndInsert: string;
    readonly mapAndUpdate: string;
    readonly mapAndPatch: string;
    readonly mapAndClone: string;
  };
}
