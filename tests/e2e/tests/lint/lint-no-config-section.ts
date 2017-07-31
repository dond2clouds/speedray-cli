import { sr } from '../../utils/process';
import { getGlobalVariable } from '../../utils/env';
import { oneLine } from 'common-tags';

export default function () {
  // Skip this in Appveyor tests.
  if (getGlobalVariable('argv').appveyor) {
    return Promise.resolve();
  }

  return Promise.resolve()
    .then(() => sr('set', 'lint', '[]'))
    .then(() => sr('lint'))
    .then(({ stdout }) => {
      if (!stdout.match(/No lint configuration\(s\) found\./)) {
        throw new Error(oneLine`
          Expected to match "No lint configuration(s) found."
          in ${stdout}.
        `);
      }

      return stdout;
    });
}
