import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
  output: {
    chunkFileNames: 'chunk/[name].[hash].js',
    dir: 'dist',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    copy({
      targets: [
        { src: 'src/index.html', dest: `dist/` },
        { src: 'node_modules/@arcgis/core/assets/', dest: 'dist/' }
      ]
    })
  ],
  preserveEntrySignatures: true 
}