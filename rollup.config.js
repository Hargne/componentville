import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'src/index.js',
	output: {
		file: 'bundle.js',
		format: 'cjs',
	},
	plugins: [
		resolve({
			jsnext: true,
		}),
		babel({
			exclude: 'node_modules/**',
		}),
		commonjs({
			include: 'node_modules/**',
			namedExports:
			{
				'./node_modules/react/react.js': [
					'cloneElement',
					'createElement',
					'PropTypes',
					'Children',
					'Component',
				],
			},
		}),
	],
};
