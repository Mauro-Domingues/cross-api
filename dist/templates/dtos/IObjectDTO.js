export class CreateIObjectDTO {
    execute() {
        return `export interface IObjectDTO {
  [key: string]: unknown;
}
`;
    }
}
