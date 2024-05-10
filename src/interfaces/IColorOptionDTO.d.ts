export type IColorOptionDTO = Record<
  'purple' | 'yellow' | 'green' | 'blue' | 'white' | 'red',
  `${'\x1b['}${number};${number};${number};${number};${number}m`
>;
