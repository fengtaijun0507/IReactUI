/*
 * @Author: chfeng
 * @Date:   2018-03-29 09:14:36
 * @Last Modified by: chfeng
 * @Last Modified time: 2018-04-03 21:08:27
 */
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

import postcss from 'rollup-plugin-postcss'
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

import path from 'path'

export default {
  input: './lib/index.js',
  output: {
    file: './build/index.js',
    format: 'cjs',
    sourcemap: true,
  },
  external: ['react'],
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({
          warnForDuplicates: false
        }),
        cssnano()
      ],
      // extract: false,
      extensions: ['.css', '.scss']
    }),
    resolve({
      jsnext: true,
      main: true,
      preferBuiltins: false,
      browser: true,
      customResolveOptions: {
        common: path.resolve(__dirname, "./lib/common")
      }
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: { 
        'is-plain-object': ['isPlainObject']
      }
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}
console.log(path.resolve(__dirname, "./lib/common"))