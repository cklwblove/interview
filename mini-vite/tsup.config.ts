import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/node/cli.ts'
  },
  format: ['esm', 'cjs'],
  target: 'es2020',
  sourcemap: true,
  splitting: false
});
