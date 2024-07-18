import { IConcatDTO } from '@interfaces/ISingletonDTO';

export class Concat {
  private static instance: IConcatDTO;

  private constructor() {}

  public static getInstance(): IConcatDTO {
    if (!Concat.instance) {
      Concat.instance = new Concat();
    }
    return Concat.instance;
  }

  public execute(...content: Array<string>): string {
    return String.prototype.concat(...content);
  }
}
