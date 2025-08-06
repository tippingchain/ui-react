import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false, // Disable DTS generation temporarily
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'thirdweb', '@tippingchain/sdk', '@tippingchain/contracts-interface'],
  treeshake: true,
  banner: {
    js: '"use client"',
  },
})