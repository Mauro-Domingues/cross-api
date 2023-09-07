export class CreateCombinations {
  public execute(): string {
    return `export function combinations<Prop>(
  elements: Array<Prop>,
  minLength = 0,
  maxLength = Infinity,
): Array<Array<Prop>> {
  const combinations: Array<Array<Prop>> = [];
  const combine = (prefix: Array<Prop>, elements: Array<Prop>) => {
    if (prefix.length >= maxLength) return;
    for (let i = 0; i < elements.length; i += 1) {
      const newPrefix = [...prefix, elements[i]];
      if (newPrefix.length >= minLength) combinations.push(newPrefix);
      combine(newPrefix, elements.slice(i + 1));
    }
  };
  combine([], elements);
  return combinations;
}
`;
  }
}
