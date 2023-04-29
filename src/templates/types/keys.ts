export class CreateKeys {
  public execute(): string {
    return `type Join<
  L extends (string | number | symbol) | undefined,
  R extends (string | number | symbol) | undefined,
> = L extends string | number
  ? R extends string | number
    ? \`\${L}.\${R}\`
    : L
  : R extends string | number
  ? R
  : undefined;

type Union<
  L extends unknown | undefined,
  R extends unknown | undefined,
> = L extends undefined
  ? R extends undefined
    ? undefined
    : R
  : R extends undefined
  ? L
  : L | R;

type ValidObject<T> = T extends object
  ? T extends { new (...parms: unknown[]): unknown } | Date | Array<unknown>
    ? false & 1
    : T
  : false & 1;

type DotPath<
  T extends object,
  Prev extends (string | number | symbol) | undefined = undefined,
  Path extends (string | number | symbol) | undefined = undefined,
  PrevTypes extends object = T,
  Visited extends object = never,
> = [T] extends [Visited]
  ? never
  : string &
      {
        [K in keyof T]: T[K] extends PrevTypes | T
          ? Union<Union<Prev, Path>, Join<Path, K>>
          : Required<T>[K] extends ValidObject<Required<T>[K]>
          ? DotPath<
              Required<T>[K],
              Union<Prev, Path>,
              Join<Path, K>,
              PrevTypes | T,
              Visited | T
            >
          : Required<T>[K] extends Array<infer U>
          ? U extends ValidObject<U>
            ? DotPath<
                U,
                Union<Prev, Path>,
                Join<Path, K>,
                PrevTypes | T,
                Visited | T
              >
            : Union<Union<Prev, Path>, Join<Path, K>>
          : Union<Union<Prev, Path>, Join<Path, K>>;
      }[keyof T];

declare type keysOfEntity<Entity extends object> = DotPath<Entity>[];
`;
  }
}
