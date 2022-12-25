export default function createModuleDTO(upperModuleName: string): string {
  return `export default interface I${upperModuleName}DTO {
  name: string;
  description: string;
}
`;
}
