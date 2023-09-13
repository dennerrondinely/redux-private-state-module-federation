import Ts from "rollup-plugin-typescript2";
import del from 'rollup-plugin-delete'
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: "cjs",
    exports: "named",
    sourcemap: true,
  },
  plugins: [
    del({ targets: 'lib/*' }),
    Ts({
      clean: true,
      tsconfigOverride:{
        exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"],
      }
    }),
    resolve(),
    babel({ babelHelpers: 'bundled', })
  ],
  
  external: ["react"],
};