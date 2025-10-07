export class CreateIndexMapper {
  public execute(): string {
    return `export { mapAndCloneAttribute as cloneAttribute } fr\om './mapAndCloneAttribute';
export { mapAndInsertAttribute as insertAttribute } fr\om './mapAndInsertAttribute';
export { mapAndPatchAttribute as patchAttribute } fr\om './mapAndPatchAttribute';
export { mapAndPatchStringify as patchStringify } fr\om './mapAndPatchString';
export { mapAndUpdateAttribute as updateAttribute } fr\om './mapAndUpdateAttribute';
export { mapAndUpdateStringify as updateStringify } fr\om './mapAndUpdateString';
`;
  }
}
