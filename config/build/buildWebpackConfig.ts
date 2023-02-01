import webpack from "webpack";

import { BuildOptions } from "./types/config";

import { buildLoaders } from "./buildLoaders";
import { buildResolver } from "./buildResolver";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";


export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, paths, isDev } = options
    return {
        mode: mode,
        entry: paths.entry,

        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            assetModuleFilename: 'images/[hash][ext][query]',
            clean: true
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolver(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}