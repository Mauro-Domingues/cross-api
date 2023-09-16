export class CreateIndexMapper {
  public execute(): string {
    return `import { mapAndCloneAttribute } ${'from'} './mapAndCloneAttribute';
import { mapAndInsertAttribute } ${'from'} './mapAndInsertAttribute';
import { mapAndPatchAttribute } ${'from'} './mapAndPatchAttribute';
import { mapAndPatchStringify } ${'from'} './mapAndPatchString';
import { mapAndUpdateAttribute } ${'from'} './mapAndUpdateAttribute';
import { mapAndUpdateStringify } ${'from'} './mapAndUpdateString';

export {
  mapAndCloneAttribute as cloneAttribute,
  mapAndInsertAttribute as insertAttribute,
  mapAndPatchAttribute as patchStringify,
  mapAndPatchStringify as patchAttribute,
  mapAndUpdateAttribute as updateAttribute,
  mapAndUpdateStringify as updateStringify,
};
`;
  }
}
