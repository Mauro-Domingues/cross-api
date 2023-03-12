export class CreateNodemonJson {
  public execute(): string {
    return `{
  "execMap":{
      "js": "node -r sucrase/register"
  }
}`;
  }
}
