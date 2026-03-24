export class CreateSlugify {
  public execute(): string {
    return `export function slugify(name?: string): string | undefined {
  return name
    ?.toLowerCase()
    .normalize('NFD')
    .replaceAll(/[\\u0300-\\u036f]/g, '')
    .replaceAll(/[_\\s:;/]/g, '-')
    .replaceAll(/[^\\w-]+/g, '')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .replaceAll(/--+/g, '-');
}
`;
  }
}
