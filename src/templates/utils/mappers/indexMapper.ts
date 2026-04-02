export class CreateIndexMapper {
  public execute(): string {
    return `export { mapAndCloneAttribute as cloneAttribute } fr\u006Fm './mapAndCloneAttribute';
export { mapAndInsertAttribute as insertAttribute } fr\u006Fm './mapAndInsertAttribute';
export { mapAndPatchAttribute as patchAttribute } fr\u006Fm './mapAndPatchAttribute';
export { mapAndPatchStringify as patchStringify } fr\u006Fm './mapAndPatchString';
export { mapAndUpdateAttribute as updateAttribute } fr\u006Fm './mapAndUpdateAttribute';
export { mapAndUpdateStringify as updateStringify } fr\u006Fm './mapAndUpdateString';
`;
  }
}
