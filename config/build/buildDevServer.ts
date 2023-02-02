import path from "path";

import { BuildOptions } from "./types/config";

import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => {
    return {
        port,
        open: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        }
    }
}