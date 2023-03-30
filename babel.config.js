module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['react-native-reanimated/plugin'],
            [
                'module-resolver',
                {
                    alias: {
                        '@root': './',
                        '@nobanco': './src',
                        '@routes': './src/routes',
                        '@assets': './src/assets',
                        '@images': './src/assets/images',
                        '@pages': './src/pages',
                        "@utils": './src/utils',
                        "@components": ["./src/components"]
                    },
                },
            ],
        ],
    };
};
