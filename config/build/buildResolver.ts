import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";


export const buildResolver = ({ paths }: BuildOptions): ResolveOptions => {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}