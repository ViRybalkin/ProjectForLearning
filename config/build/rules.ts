import webpack from 'webpack';

export const Rules = (): webpack.RuleSetRule[] => {
    const typescriptRules = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const sassRules =  {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    };
    return [typescriptRules, sassRules]
}