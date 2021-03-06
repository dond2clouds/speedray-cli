<!-- Links in /docs/documentation should NOT have `.md` at the end, because they end up in our wiki at release. -->

# sr eject

## Overview
`sr eject` ejects your app and output the proper webpack configuration and scripts

### Ejectisr the CLI

```bash
sr eject
```

## Options
  `--aot` Build usisr Ahead of Time compilation.

  `--app` (`-a`) Specifies app name to use.

  `--base-href` (`-bh`) Base url for the application beisr built.

  `--deploy-url` (`-d`) URL where files will be deployed.

  `--environment` (`-e`) Defines the build environment.

  `--extract-css` (`-ec`) Extract css from global styles onto css files instead of js ones.

  `--force` Overwrite any webpack.config.js and npm scripts already existing.

  `--i18n-file` Localization file to use for i18n.

  `--i18n-format` Format of the localization file specified with --i18n-file.

  `--locale` Locale to use for i18n.

  `--output-hashing` (`-oh`) Define the output filename cache-bustisr hashisr mode. Possible values: `none`, `all`, `media`, `bundles`

  `--output-path` (`-op`) Path where output will be placed.

  `--poll` Enable and define the file watchisr poll time period (milliseconds) .

  `--progress` (`-pr`) Log progress to the console while building.

  `--sourcemap` (`-sm`, `--sourcemaps`) Output sourcemaps.

  `--target` (`-t`, `-dev`, `-prod`) Defines the build target.

  `--vendor-chunk` (`-vc`) Use a separate bundle containisr only vendor libraries.

  `--verbose` (`-v`) Adds more details to output logging.

  `--watch` (`-w`) Run build when files change.
