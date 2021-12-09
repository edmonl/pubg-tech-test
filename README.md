Implement the module `index.ts`.
An example test is available in `test.ts`.
`npm test` runs `test.ts`.

`index.ts` exports the only function called, for example, `makeQueue`.
`makeQueue` accepts a function called, for example, `job`, and an optional configuration object, and returns a function called, for example, `queuedJob`.
`queuedJob` can be called with the same arguments as `job`, and returns a promise that resolves to the same value as `job`.
`queuedJob` may be called many times in a row, and the underlying `job` is actually called sequentially.
The number of times `queuedJob` may be called before any of its return values are resolved is configurable in the configuration object passed to `makeQueue`.

The candidate may be asked to design test cases to demonstrate features.
