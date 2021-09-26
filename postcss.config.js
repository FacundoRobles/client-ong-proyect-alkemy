module.exports = {
    plugins: {
        'postcss-preset-env': {
            stage: 0
        },
        'postcss-import': {
            path: ['src', 'node_modules']
        },
        'postcss-custom-media': {
            importFrom: 'src/sass/breakpoints.css'
        }
    }
};
