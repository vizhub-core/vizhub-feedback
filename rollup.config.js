import buble from 'rollup-plugin-buble';

export default {
  input: 'src/exports.js',
  external: [
    'react',
    'react-measure',
    'magic-sandbox',
    'react-codemirror2',
    'redux',
    'classnames'
  ],
  plugins: [
    buble()
  ],
  output: [
    { file: 'dist/index.js', format: 'cjs' }
  ]
};
