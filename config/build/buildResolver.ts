import {ResolveOptions} from "webpack";


export const buildResolver = (): ResolveOptions => {

    return {
        extensions: ['.tsx', '.ts', '.js']
    }
}