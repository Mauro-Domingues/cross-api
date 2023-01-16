import messages from '@tools/messages';
import makeDependentProvider from './dependent';
import makeProvider from './independent';

export default async function createProvider(
  providerName: string | undefined,
  fatherData: { [key: string]: string } | undefined,
): Promise<void> {
  if (providerName && fatherData) {
    makeDependentProvider(providerName, fatherData);
  } else if (providerName) {
    makeProvider(providerName);
  } else {
    console.log(
      '\x1b[1m',
      '\x1b[38;2;255;0;0m',
      messages.providerNotFound,
      '\x1b[0m',
    );
  }
}
