// vite.config.ts

/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'CodyMath', // UMD global variable name
        fileName: (format) => `codymath.${format}.js`,
        },
    },
    test: {
        // Vitest config will go here
    },
});