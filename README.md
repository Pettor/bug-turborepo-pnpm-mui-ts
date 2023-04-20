# bug-turborepo-pnpm-mui-ts

This repository is used to reproduce a problem caused by combining Turborepo, PNPM, MUI and Typescript.

## Reproduce build error

1. Enable corepack (sudo corepack enable) or install PNPM 8.2.0.
2. Run `pnpm i`
3. Run `pnpm build`
4. Build should fail in the UI package.
