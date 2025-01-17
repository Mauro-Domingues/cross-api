import { CreateCombinations } from '@templates/utils/combinations';
import { CreateConvertToMilliseconds } from '@templates/utils/convertToMilliseconds';
import { CreateDecimaAdjust } from '@templates/utils/decimalAdjust';
import { CreateErrorLog } from '@templates/utils/errorLog';
import { CreateGetRouteRegex } from '@templates/utils/getRouteRegex';
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
  private readonly createGetRouteRegex: CreateGetRouteRegex;
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
    this.createGetRouteRegex = new CreateGetRouteRegex();
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
    const basePath = this.fileManager.resolvePath(['src', 'utils']);
    const mappersPath = this.fileManager.resolvePath([basePath, 'mappers']);

    return this.fileManager.checkAndCreateMultiFile([
      [[mappersPath, 'index.ts'], this.createIndexMapper],
      [[mappersPath, 'mapAndCloneAttribute.ts'], this.createMapAndClone],
      [[mappersPath, 'mapAndInsertAttribute.ts'], this.createMapAndInsert],
      [[mappersPath, 'mapAndPatchAttribute.ts'], this.createMapAndPatch],
      [[mappersPath, 'mapAndPatchString.ts'], this.createMapAndPatchString],
      [[mappersPath, 'mapAndUpdateAttribute.ts'], this.createMapAndUpdate],
      [[mappersPath, 'mapAndUpdateString.ts'], this.createMapAndUpdateString],
      [[basePath, 'decimalAdjust.ts'], this.createDecimaAdjust],
      [
        [basePath, 'convertToMilliseconds.ts'],
        this.createConvertToMilliseconds,
      ],
      [[basePath, 'combinations.ts'], this.createCombinations],
      [[basePath, 'errorLog.ts'], this.createErrorLog],
      [[basePath, 'getRouteRegex.ts'], this.createGetRouteRegex],
      [[basePath, 'jsonToXml.ts'], this.createJsonToXml],
      [[basePath, 'normalizeQueryLink.ts'], this.createNormalizeQueryLink],
      [[basePath, 'slugify.ts'], this.createSlugify],
    ]);
  }
}
