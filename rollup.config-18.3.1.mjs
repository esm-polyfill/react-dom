import { defineConfig } from 'rollup'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import {globSync} from 'glob'
import path from 'node:path'



const inputDev = Object.fromEntries(
    globSync('node_modules/react-dom-18.3.1/cjs/*.development.js')
    .map((file) => [
        path.relative('node_modules/react-dom-18.3.1/cjs', file,).slice(0, -3),
        file
    ])
)


const confDev = defineConfig({
    external: [
        '@esm-polyfill/react-dom',
        'react',
        'scheduler',
        'util',
        'stream',
    ],
    input: {
        ...inputDev,
    },
    output: {
        exports: 'named',
        dir: 'react-dom-18.3.1/esm',
        format: 'esm'
    },
    plugins: [
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        alias({
            entries: [
                { find: 'react-dom', replacement: '@esm-polyfill/react-dom' },
            ]
        }),
        commonjs({
            strictRequires: 'debug',
            esmExternals: true,
            defaultIsModuleExports: false,
            requireReturnsDefault: 'namespace',
        }),
    ]
})



const inputPro = Object.fromEntries(
    globSync([
        'node_modules/react-dom-18.3.1/cjs/*.production.min.js',
        'node_modules/react-dom-18.3.1/cjs/react-dom.profiling.min.js',
    ])
    .map((file) => [
        path.relative('node_modules/react-dom-18.3.1/cjs', file,).slice(0, -3),
        file
    ])
)


const confPro = defineConfig({
    external: [
        '@esm-polyfill/react-dom',
        'react',
        'scheduler',
        'util',
        'stream',
    ],
    input: {
        ...inputPro,
    },
    output: {
        exports: 'named',
        dir: 'react-dom-18.3.1/esm',
        format: 'esm'
    },
    plugins: [
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        alias({
            entries: [
                { find: 'react-dom', replacement: '@esm-polyfill/react-dom' },
            ]
        }),
        commonjs({
            strictRequires: 'debug',
            esmExternals: true,
            defaultIsModuleExports: false,
            requireReturnsDefault: 'namespace',
        }),
    ]
})

export default [confDev, confPro]