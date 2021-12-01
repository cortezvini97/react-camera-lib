import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import { config } from "dotenv";
import pkg from './package.json';

let main = pkg.main;
let env = config().parsed

const dev = [
    typescript({ objectHashIgnoreUnknownHack: true, clean: true }),
    babel()
];

const prod = [
    typescript({ objectHashIgnoreUnknownHack: true, clean: true }),
    terser(),
    babel()
];

export default {
    input: "src/index.tsx",
    output: [
        {
            file: main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
            strict: false,
        }
    ],
    plugins: (env.mode == "development") ? dev : prod,
    external: ["react", "react-dom"],
}