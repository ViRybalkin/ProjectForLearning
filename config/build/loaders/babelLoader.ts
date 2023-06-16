import babelRemovePropsPlugin from "../babel/babelRemovePropsPlugin";

export const babelLoader = (isDev: boolean, isTsx: boolean) => {
    return {
        exclude: /node_modules/,
        test: isTsx ? /\.(|jsx|tsx)$/ : /\.(js|ts)$/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                plugins: [
                    [
                        "@babel/plugin-transform-typescript", {
                        isTsx,
                    }
                    ],
                    isTsx && !isDev && [babelRemovePropsPlugin,
                        {attribute: ['data-testid']}],
                    '@babel/plugin-transform-runtime',
                    isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                presets: ['@babel/preset-env'],
            },
        },
    }
}