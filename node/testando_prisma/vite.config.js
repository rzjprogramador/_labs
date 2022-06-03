import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: '.',
  test: {
    globals: true,
    include: ['**\/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache']
  },
})