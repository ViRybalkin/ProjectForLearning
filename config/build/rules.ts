import webpack from 'webpack';

export const Rules = (): webpack.RuleSetRule[] => {
    const typescriptRules = {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            };
    return [typescriptRules]
}