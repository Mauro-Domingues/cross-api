export class CreateSlugify {
  public execute(): string {
    return `export function slugify(name?: string): string | undefined {
  return name
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .replace(/[\\s:;\\/]/g, '-')
    .replace(/[^\\w\\-]+/g, '')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .replace(/\\-\\-+/g, '-');
}
`;
  }
}
