import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async ({ mode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (import.meta as any).env = loadEnv(mode, process.cwd()); // force load env

  await require('./src/config/env'); // Check env and throw error during build only

  return {
    assetsInclude: ['**/*.hdr', '**/*.exr', '**/*.glb'],
    server: {
      host: process.env.HOST,
      port: parseInt(process.env.APP_DEV_PORT || '3000'),
    },
    plugins: [
      tsconfigPaths(),
      // tsconfigPaths({
      //   projects: ['tsconfig.base.json', 'tsconfig.node.json'],
      // }),
      react(),
      svgr({
        // svgr options: https://react-svgr.com/docs/options/
        svgrOptions: {
          // ...
        },

        // esbuild options, to transform jsx to js
        esbuildOptions: {
          // ...
        },

        // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
        include: '**/*.svg?react',

        //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
        exclude: '',
      }),
    ],
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, './src/theme'),
      },
    },
  };
});
