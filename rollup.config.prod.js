import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import scss from 'rollup-plugin-scss'
import uglify from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'

export default {
  input: 'src/index.js',
  plugins: [
    buble({
      exclude: '**.scss'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    scss({
      output: 'dist/style-min.css'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    uglify(),
    filesize(),
  ],
  output: {
    file: 'dist/bundle-min.js',
    format: 'iife',
    sourcemap: true
  },
}

