import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/main.tsx'],
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
