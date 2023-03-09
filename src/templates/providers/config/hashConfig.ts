export function createHashConfig(): string {
  return `interface IHashConfig {
  secret: number;
}

export default {
  secret: Number(process.env.HASH_SECRET_KEY) || 10,
} as IHashConfig;
`;
}
