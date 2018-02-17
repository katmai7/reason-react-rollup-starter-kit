import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import bucklescript from 'rollup-plugin-bucklescript';

export default {
  input: 'src/Component.re',
  plugins: [
    bucklescript(),
    alias({
      resolve: ['.js', '.re']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    resolve(),
    commonjs({
      include: ['node_modules/**']
    }),
  ],
  external: ['react', 'react-dom']
}
