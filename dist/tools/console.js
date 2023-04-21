const colorOptions = {
  blue: '\x1b[38;2;0;155;255m',
  green: '\x1b[38;2;0;255;155m',
  yellow: '\x1b[38;2;255;255;0m',
  red: '\x1b[38;2;255;0;0m',
  purple: '\x1b[38;2;255;0;255m',
  white: '\x1b[38;2;0;0;0m',
};
export class Console {
  getColor = color => colorOptions[color];
  isBold = bold => (bold ? '\x1b[1m' : '\x1b[0m');
  isbreakStart = breakStart => (breakStart ? '\n' : '\b');
  isbreakend = breakEnd => (breakEnd ? '\n' : '\b');
  one(assets) {
    const payload = [
      String(this.isBold(assets[2])),
      String(this.getColor(assets[1])),
      String(
        `${this.isbreakStart(assets[3])}${assets[0]}${this.isbreakend(
          assets[4],
        )}`,
      ),
      String('\x1b[0m'),
    ];
    const output = payload.reduce((acc, input) => acc + input);
    return console.log(output);
  }
  many(assets) {
    const payload = [];
    assets.map(asset => {
      return payload.push(
        String(this.isBold(asset[2])),
        String(this.getColor(asset[1])),
        String(
          `${this.isbreakStart(asset[3])}${asset[0]}${this.isbreakend(
            asset[4],
          )}`,
        ),
        String('\x1b[0m'),
      );
    });
    const output = payload.reduce((acc, input) => acc + input);
    return console.log(output);
  }
}
