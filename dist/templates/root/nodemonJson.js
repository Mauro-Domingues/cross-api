export class CreateNodemonJson {
  execute() {
    return `{
  "execMap":{
      "js": "node -r sucrase/register"
  }
}`;
  }
}
