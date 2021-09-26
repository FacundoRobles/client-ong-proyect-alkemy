/* eslint-disable no-template-curly-in-string */
module.exports = {
    presets: [
        'react-app',
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/proposal-optional-chaining',
        '@babel/plugin-transform-runtime',
        ['transform-imports', {
            reactstrap: {
                transform: 'reactstrap/lib/${member}',
                preventFullImport: true
            }
        }],
        ['module-extension', {mjs: 'js'}]
    ]
};
