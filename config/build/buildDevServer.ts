import path from 'path';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => ({
    port,
    open: true,
    historyApiFallback: true,
    static: {
        directory: path.join(__dirname, '/'),
    },
});
