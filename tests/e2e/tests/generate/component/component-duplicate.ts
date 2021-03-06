import * as path from 'path';
import { sr } from '../../../utils/process';
import { oneLine } from 'common-tags';

export default function () {
  return sr('generate', 'component', 'test-component')
    .then((output) => {
      if (!output.stdout.match(/update src[\\|\/]app[\\|\/]app.module.ts/)) {
        throw new Error(oneLine`
          Expected to match
          "update src${path.sep}app${path.sep}app.module.ts"
          in ${output}.`);
      }
    })
    .then(() => sr('generate', 'component', 'test-component'))
    .then((output) => {
      if (!output.stdout.match(/identical src[\\|\/]app[\\|\/]app.module.ts/)) {
        throw new Error(oneLine`
          Expected to match
          "identical src${path.sep}app${path.sep}app.module.ts"
          in ${output}.`);
      }
    });
}
