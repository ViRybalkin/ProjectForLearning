import {ResolveOptions} from 'webpack';

export const Extensions = (path: string): ResolveOptions => ({
    alias: {
        '@': path
    },
    extensions: ['.tsx', '.ts', '.js'],
    mainFiles: ['index'],
    modules: [path, 'node_modules'],
    preferAbsolute: true,
});
