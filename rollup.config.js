import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import {terser} from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
    {
        input: "src/index.js",
        output: [
            {
                name: "vn2000-converter",
                file: pkg.browser,
                format: "umd"
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: ["node_modules/**"]
            }),
            terser()
        ],
    },
    {
        input: "src/index.js",
        output: [
            { file: pkg.main, format: "cjs" },
            { file: pkg.module, format: "es" },
        ],
        plugins: [
            babel({
                exclude: ["node_modules/**"]
            }),
            terser()
        ],
    }
];

