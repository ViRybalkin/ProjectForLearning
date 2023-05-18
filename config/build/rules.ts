import webpack from 'webpack';
import {styleLoader} from './loaders/styleLoader';
import {babelLoader} from "./loaders/babelLoader";

export const Rules = (isDev: boolean): webpack.RuleSetRule[] => {
    const svgRules = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const fileRules = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const codeBabelLoader = babelLoader(isDev, false);
    const tsxBabelLoader = babelLoader(isDev, true);
    const sassRules = styleLoader(isDev);

    return [
        svgRules,
        fileRules,
        codeBabelLoader,
        tsxBabelLoader,
        sassRules,
    ];
};
