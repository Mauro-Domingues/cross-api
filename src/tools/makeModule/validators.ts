import type { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateSchema } from '@templates/modules/validators/createSchema';
import { CreateValidator } from '@templates/modules/validators/createValidator';
import { DeleteValidator } from '@templates/modules/validators/deleteValidator';
import { ListValidator } from '@templates/modules/validators/listValidator';
import { ShowValidator } from '@templates/modules/validators/showValidator';
import { UpdateValidator } from '@templates/modules/validators/updateValidator';
import { Concat } from '@tools/concat';
import { BaseModule } from '@tools/makeModule/base';

export class CreateValidators extends BaseModule {
  private readonly updateValidator: UpdateValidator;
  private readonly createValidator: CreateValidator;
  private readonly deleteValidator: DeleteValidator;
  private readonly showValidator: ShowValidator;
  private readonly listValidator: ListValidator;
  private readonly createSchema: CreateSchema;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
    this.updateValidator = new UpdateValidator(this.names, fatherNames);
    this.createValidator = new CreateValidator(this.names, fatherNames);
    this.deleteValidator = new DeleteValidator(this.names, fatherNames);
    this.showValidator = new ShowValidator(this.names, fatherNames);
    this.listValidator = new ListValidator(this.names, fatherNames);
    this.createSchema = new CreateSchema(this.names, fatherNames);
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [
        [
          this.basePath,
          'validators',
          this.names.pluralLowerModuleName,
          this.concat.execute(this.names.lowerModuleName, 'Schema.ts'),
        ],
        this.createSchema,
      ],
      [
        [
          this.basePath,
          'validators',
          this.names.pluralLowerModuleName,
          this.concat.execute('create', this.names.upperModuleName, '.ts'),
        ],
        this.createValidator,
      ],
      [
        [
          this.basePath,
          'validators',
          this.names.pluralLowerModuleName,
          this.concat.execute('delete', this.names.upperModuleName, '.ts'),
        ],
        this.deleteValidator,
      ],
      [
        [
          this.basePath,
          'validators',
          this.names.pluralLowerModuleName,
          this.concat.execute('list', this.names.upperModuleName, '.ts'),
        ],
        this.listValidator,
      ],
      [
        [
          this.basePath,
          'validators',
          this.names.pluralLowerModuleName,
          this.concat.execute('show', this.names.upperModuleName, '.ts'),
        ],
        this.showValidator,
      ],
      [
        [
          this.basePath,
          'validators',
          this.names.pluralLowerModuleName,
          this.concat.execute('update', this.names.upperModuleName, '.ts'),
        ],
        this.updateValidator,
      ],
    ]);
  }
}
