type Mods = Record<string, boolean | string>

export const classnames = (cls: string, mods: Mods, additional: string[]): string => [
    cls,
    ...additional,
    ...Object.entries(mods)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_className, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');
