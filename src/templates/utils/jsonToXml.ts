export class CreateJsonToXml {
  public execute(): string {
    return `export function jsonToXml<T extends object>(json: T, root?: string): string {
  let xml = root ? \`<\${root}>\` : '';
  Object.entries(json).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => {
        xml += \`<\${key}>\${jsonToXml(item)}</\${key}>\`;
      });
    } else if (typeof value === 'object') {
      xml += \`<\${key}>\${jsonToXml(value)}</\${key}>\`;
    } else {
      xml += \`<\${key}>\${value}</\${key}>\`;
    }
  });
  xml += root ? \`</\${root}>\` : '';
  return xml;
}
`;
  }
}
