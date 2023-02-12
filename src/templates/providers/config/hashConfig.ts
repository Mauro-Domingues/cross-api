export function createHashConfig(): string {
  return `interface IHashConfig {
  secret: string | number;
}

export default {
  secret: Number(process.env.HASH_SECRET_KEY) || 10,
} as IHashConfig;
`;
}
