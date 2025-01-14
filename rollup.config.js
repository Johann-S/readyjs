// rollup.config.js
import typescript from 'rollup-plugin-typescript'
import nodeResolve from 'rollup-plugin-node-resolve'

const pkg = require('./package')

export default {
  entry: pkg.config.src,
  moduleName: pkg.config.moduleName,
  dest: pkg.main,
  format: 'es',
  sourceMap: true,
  plugins: [
    typescript({
      typescript: require('typescript'),
      outDir: 'dist',
      rootDir: 'src',
      module: 'es6',
      target: 'es6',
      declaration: false,
      removeComments: true,
      lib: [
        'dom',
        'es6'
      ] // use local version
    }),
    nodeResolve({
      module: true,
      jsnext: true,
      browser: true,
      extensions: [ '.js', '.json' ],
      preferBuiltins: false
    })
  ]
}
