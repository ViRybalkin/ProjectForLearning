import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const styleLoader = (isDev: boolean) => {
    return {

        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes('.module.scss'),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    };
};
