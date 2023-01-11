export default function createHashConfig(): string {
  return `interface IHashConfig {
  hash: string | number;
}

export default {
  hash: process.env.HASH_SECRET_KEY || 10,
} as IHashConfig;
`;
}
