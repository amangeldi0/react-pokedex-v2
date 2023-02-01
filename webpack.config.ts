import path from 'path';
import webpack from 'webpack';

import {BuildEnv, BuildPath} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";


export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const mode = env.mode || 'development';
    const isDev: boolean = mode === "development"
    const port: number = env.port || 3000

    return buildWebpackConfig({
        mode,
        paths: paths,
        isDev,
        port
    });
};