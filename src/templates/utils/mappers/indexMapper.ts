export class CreateIndexMapper {
  public execute(): string {
    return `export { mapAndCloneAttribute as cloneAttribute } ${'from'} './mapAndCloneAttribute';
export { mapAndInsertAttribute as insertAttribute } ${'from'} './mapAndInsertAttribute';
export { mapAndPatchAttribute as patchAttribute } ${'from'} './mapAndPatchAttribute';
export { mapAndPatchStringify as patchStringify } ${'from'} './mapAndPatchString';
export { mapAndUpdateAttribute as updateAttribute } ${'from'} './mapAndUpdateAttribute';
export { mapAndUpdateStringify as updateStringify } ${'from'} './mapAndUpdateString';
`;
  }
}
