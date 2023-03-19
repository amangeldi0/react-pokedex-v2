import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolver } from './buildResolver';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,

        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            assetModuleFilename: 'images/[hash][ext][query]',
            clean: true,
            publicPath: '/',
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolver(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
