import { CreateCombinations } from '@templates/utils/combinations';
import { CreateConvertToMilliseconds } from '@templates/utils/convertToMilliseconds';
import { CreateDecimaAdjust } from '@templates/utils/decimalAdjust';
import { CreateDomainsManager } from '@templates/utils/domains';
import { CreateErrorLog } from '@templates/utils/errorLog';
import { CreateJsonToXml } from '@templates/utils/jsonToXml';
import { CreateIndexMapper } from '@templates/utils/mappers/indexMapper';
import { CreateMapAndClone } from '@templates/utils/mappers/mapAndClone';
import { CreateMapAndInsert } from '@templates/utils/mappers/mapAndInsert';
import { CreateMapAndPatch } from '@templates/utils/mappers/mapAndPatch';
import { CreateMapAndPatchString } from '@templates/utils/mappers/mapAndPatchString';
import { CreateMapAndUpdate } from '@templates/utils/mappers/mapAndUpdate';
import { CreateMapAndUpdateString } from '@templates/utils/mappers/mapAndUpdateString';
import { CreateNormalizeQueryLink } from '@templates/utils/normalizeQueryLink';
import { CreateSlugify } from '@templates/utils/slugify';
import { FileManager } from '@tools/fileManager';

export class CreateUtils {
  private readonly createConvertToMilliseconds: CreateConvertToMilliseconds;
  private readonly createNormalizeQueryLink: CreateNormalizeQueryLink;
  private readonly createMapAndUpdateString: CreateMapAndUpdateString;
  private readonly createMapAndPatchString: CreateMapAndPatchString;
  private readonly createDomainsManager: CreateDomainsManager;
  private readonly createDecimaAdjust: CreateDecimaAdjust;
  private readonly createCombinations: CreateCombinations;
  private readonly createMapAndUpdate: CreateMapAndUpdate;
  private readonly createMapAndInsert: CreateMapAndInsert;
  private readonly createMapAndPatch: CreateMapAndPatch;
  private readonly createMapAndClone: CreateMapAndClone;
  private readonly createIndexMapper: CreateIndexMapper;
  private readonly createJsonToXml: CreateJsonToXml;
  private readonly createErrorLog: CreateErrorLog;
  private readonly createSlugify: CreateSlugify;
  private readonly fileManager: FileManager;

  public constructor() {
    this.fileManager = FileManager.getInstance();
    this.createConvertToMilliseconds = new CreateConvertToMilliseconds();
    this.createNormalizeQueryLink = new CreateNormalizeQueryLink();
    this.createMapAndUpdateString = new CreateMapAndUpdateString();
    this.createMapAndPatchString = new CreateMapAndPatchString();
    this.createDomainsManager = new CreateDomainsManager();
    this.createDecimaAdjust = new CreateDecimaAdjust();
    this.createCombinations = new CreateCombinations();
    this.createMapAndUpdate = new CreateMapAndUpdate();
    this.createMapAndInsert = new CreateMapAndInsert();
    this.createMapAndPatch = new CreateMapAndPatch();
    this.createIndexMapper = new CreateIndexMapper();
    this.createMapAndClone = new CreateMapAndClone();
    this.createJsonToXml = new CreateJsonToXml();
    this.createErrorLog = new CreateErrorLog();
    this.createSlugify = new CreateSlugify();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'utils', 'mappers', 'index.ts'], this.createIndexMapper],
      [
        ['src', 'utils', 'mappers', 'mapAndCloneAttribute.ts'],
        this.createMapAndClone,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndInsertAttribute.ts'],
        this.createMapAndInsert,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndPatchAttribute.ts'],
        this.createMapAndPatch,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndPatchString.ts'],
        this.createMapAndPatchString,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndUpdateAttribute.ts'],
        this.createMapAndUpdate,
      ],
      [
        ['src', 'utils', 'mappers', 'mapAndUpdateString.ts'],
        this.createMapAndUpdateString,
      ],
      [['src', 'utils', 'decimalAdjust.ts'], this.createDecimaAdjust],
      [['src', 'utils', 'domainsManager.ts'], this.createDomainsManager],
      [
        ['src', 'utils', 'convertToMilliseconds.ts'],
        this.createConvertToMilliseconds,
      ],
      [['src', 'utils', 'combinations.ts'], this.createCombinations],
      [['src', 'utils', 'errorLog.ts'], this.createErrorLog],
      [['src', 'utils', 'jsonToXml.ts'], this.createJsonToXml],
      [
        ['src', 'utils', 'normalizeQueryLink.ts'],
        this.createNormalizeQueryLink,
      ],
      [['src', 'utils', 'slugify.ts'], this.createSlugify],
    ]);
  }
}
