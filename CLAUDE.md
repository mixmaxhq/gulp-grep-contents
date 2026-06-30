# gulp-grep-contents — repo card

> A map, not a manual. Keep it ~1 screen; point to detail, don't inline it.

## What it is
A minimal Gulp plugin that filters a vinyl file stream by testing each file's contents against a regular expression, passing through (or excluding, when inverted) only the files that match.

## serves
role: Gulp stream utility — regex-based content filter for build pipelines
referenced-by: [any Mixmax gulp-based build pipeline that needs to select/exclude files by content]

## Code map
- Plugin entry -> `index.js`
- Package manifest -> `package.json`

## Conventions
- CommonJS (`require`/`module.exports`) — matches the surrounding legacy style.
- Accepts a `RegExp` as first arg and an options object `{ invert: true }` as second; keep that signature stable.
- Vinyl `Stream` mode is explicitly unsupported — buffers only; throw `PluginError` if a stream file arrives.

## Gotchas
- The `invert` option key in the README says `inverted` but the code reads `options.invert` — the README is wrong; use `invert`.
- No tests are wired up (`npm test` exits 1); add tests with `mocha`/`vinyl` before any non-trivial change.

## Run / test
```bash
npm install          # install deps (gulp-util, through2)
# No automated tests configured; manual smoke test via a local gulp task
```

## Load the matching domain card
This repo is cross-cutting tooling — it owns no product domain, so there is no domain card to load. When working here, load the card of the consuming service/domain if the change is driven by its needs.
