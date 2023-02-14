import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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

    const typescriptRules = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const sassRules =  {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader": MiniCssExtractPlugin.loader,
            {
                loader:"css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes(".module.scss"),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]"  : '[hash:base64:5]',
                    },
                },
            } ,
            "sass-loader",
        ],
    };
    return [
        svgRules,
        fileRules,
        typescriptRules,
        sassRules
    ]
}