import { defineConfig } from 'vite';

export default defineConfig({
    base: '/anatomy-of-the-55.55-site/',
    build: {
        outDir: './dist',
        minify: false,
        polyfillModulePreload: false
    }
});
