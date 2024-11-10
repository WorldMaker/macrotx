import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  format: 'esm',
})

await esbuild.build({
  entryPoints: ['src/index-stamps.ts'],
  bundle: true,
  outdir: 'dist',
  format: 'esm',
})

await esbuild.build({
  entryPoints: ['src/main.css'],
  bundle: true,
  loader: {
    '.eot': 'empty',
    '.svg': 'empty',
    '.ttf': 'empty',
    '.woff': 'empty',
  },
  outdir: 'dist',
})

await esbuild.build({
  entryPoints: ['_stamp.ts'],
  bundle: true,
  outfile: '_stamp.js',
  format: 'esm',
  platform: 'node',
  external: ['jsdom'],
})

await import('./_stamp.js')
