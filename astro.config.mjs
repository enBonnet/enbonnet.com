// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';

// https://astro.build/config
export default defineConfig({
  site: 'https://enbonnet.com',
  build: {
    assets: 'assets',
  },
});

execSync('node scripts/generate-qr.js', { stdio: 'inherit' });
