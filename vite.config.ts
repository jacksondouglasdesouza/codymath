// vite.config.ts

/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'CodyMath',
            formats: ['es', 'cjs', 'umd'],
            fileName: (format) => {
                if (format === 'es') {
                    return 'codymath.js';
                }
                if (format === 'cjs') {
                    return 'codymath.cjs';
                }
                return `codymath.${format}.js`;
            },
        },
        sourcemap: true,
    },
    test: {
        // ... Vitest config will go here
    },
});