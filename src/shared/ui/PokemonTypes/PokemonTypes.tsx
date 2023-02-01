import { FC } from "react";
import { dynamicImport } from "../../lib/helpers/dynamicImport/dynamicImport";
import { classnames } from "../../lib/helpers/classnames/classnames";
import { Type } from "../../types";

import styles from './PokemonType.module.scss';

export const PokemonTypes: FC<{types: Type[]}> = ({types}) => {
    const firstType: string = types[0]?.type.name;
    const secondType: string = types[1]?.type.name;

    if (types.length === 1) {
        return (
            <div className={styles.pokemonTypes}>
                <div className={classnames(styles.type, {}, [`type_${firstType}`])}>
                    <img src={dynamicImport(`${firstType}.png`)} alt=''/>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.pokemonTypes}>
                <div className={classnames(styles.type, {}, [`type_${firstType}`])}>
                    <img src={dynamicImport(`${firstType}.png`)} alt={firstType} />
                </div>
                <div className={classnames(styles.type, {}, [`type_${secondType}`])}>
                    <img src={dynamicImport(`${secondType}.png`)} alt={secondType}/>
                </div>
            </div>
        );
    }
};
