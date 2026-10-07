# Vitest browser mode: `vi.mock` in a setup file doesn't work for static imports

`setup.ts` mocks `weather.ts`. `static.test.ts` imports it and expects the mock, but gets the real module.

```sh
pnpm install
pnpm exec playwright install chromium
pnpm test
```

```
AssertionError: expected 'rain' to be 'sunny'
```

It fails on Vitest 5.0.3. It passes on 4.1.11.
