import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './src/tests/unit/coverage',
      exclude: ['node_modules/**', 'dist/**', 'public/**', '**/mock/**', 'src/main.ts'],
      include: ['src/**'],
    },
  },
});
