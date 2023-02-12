export function createNodemonJson(): string {
  return `{
  "execMap":{
      "js": "node -r sucrase/register"
  }
}`;
}
