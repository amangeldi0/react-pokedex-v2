type Mods = Record<string, boolean | string>

export const classnames = (cls: string, mods: Mods, additional: string[]): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}