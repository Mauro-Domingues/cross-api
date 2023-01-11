export default function createICrypto(): string {
  return `import ICryptoDTO from '../dtos/ICryptoDTO';

export default interface ICryptoProvider {
  encrypt(text: string): ICryptoDTO;
  decrypt(hash: ICryptoDTO): string;
}
`;
}
