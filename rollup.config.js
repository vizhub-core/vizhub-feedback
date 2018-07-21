import buble from 'rollup-plugin-buble';

export default {
  input: 'src/exports.js',
  external: ['react', 'react-measure'],
  plugins: [
    buble()
  ],
  output: [
    { file: 'dist/index.js', format: 'cjs' }
  ]
};
