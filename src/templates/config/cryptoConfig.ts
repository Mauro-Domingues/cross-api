export default function createCryptoConfig(): string {
  return `import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const secretKey = \`\${process.env.CRYPTO_SECRET_KEY}\`;

interface ICryptoConfig {
  encrypt(text: string): any;
  decrypt(hash: any): any;
}

interface ICriptoData {
  iv: string;
  content: string;
}

const encrypt = (text: string): ICriptoData => {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex'),
  };
};

const decrypt = (data: ICriptoData): string => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(data.iv, 'hex'),
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(data.content, 'hex')),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

export default {
  encrypt,
  decrypt,
} as ICryptoConfig;
`;
}
