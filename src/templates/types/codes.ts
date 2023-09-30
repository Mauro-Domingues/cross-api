export class CreateCodes {
  public execute(): string {
    return `/**
* @description Add your message codes here
*/
declare type messageCode =
  | 'FAILED_TO_CREATE_NOTIFICATION'
  | 'FAILED_TO_CREATE_LEAD'
  | 'FAILED_TO_GET_SESSION'
  | 'INVALID_DELAY_FORMAT'
  | 'TOO_MANY_REQUESTS'
  | 'FAILED_TO_CREATE'
  | 'FAILED_TO_LIST'
  | 'FILE_NOT_FOUND'
  | 'NOT_FOUND'
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  | 'PATCHED'
  | 'LISTED'
  | 'FOUND';
`;
  }
}
