export function createIStorage(): string {
  return `export default interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
`;
}
