export class CreateIndexMapper {
  public execute(): string {
    return `import { mapAndCloneAttribute } ${'from'} './mapAndCloneAttribute';
import { mapAndInsertAttribute } ${'from'} './mapAndInsertAttribute';
import { mapAndPatchAttribute } ${'from'} './mapAndPatchAttribute';
import { mapAndPatchStringify } ${'from'} './mapAndPatchString';
import { mapAndUpdateAttribute } ${'from'} './mapAndUpdateAttribute';
import { mapAndUpdateStringify } ${'from'} './mapAndUpdateString';

export {
  mapAndInsertAttribute as insertAttribute,
  mapAndUpdateAttribute as updateAttribute,
  mapAndUpdateStringify as updateStringify,
  mapAndCloneAttribute as cloneAttribute,
  mapAndPatchStringify as patchAttribute,
  mapAndPatchAttribute as patchStringify,
};
`;
  }
}
