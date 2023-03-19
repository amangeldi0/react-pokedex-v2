import { FC } from 'react';
import { classnames } from 'shared/lib/helpers/classnames/classnames';
import { dynamicImport } from 'shared/lib/helpers/dynamicImport/dynamicImport';
import { Type } from 'shared/types';

import styles from './PokemonButtonType.module.scss';

export const PokemonButtonType: FC<{types: Type[]}> = ({ types }) => {
    const firstType: string = types[0]?.type.name;
    const secondType: string = types[1]?.type.name;

    if (types.length === 1) {
        return (
            <div className={styles.contentType}>
                <div className={classnames(styles.type, {}, [`type_${firstType}`])}>
                    {firstType}
                    <img className={styles.typeImage} src={dynamicImport(`${firstType}.png`)} alt="" />
                </div>
            </div>
        );
    }
    return (
        <div className={styles.contentType}>
            <div className={classnames(styles.type, {}, [`type_${firstType}`])}>
                {firstType}
                <img className={styles.typeImage} src={dynamicImport(`${firstType}.png`)} alt={firstType} />
            </div>
            <div className={classnames(styles.type, {}, [`type_${secondType}`])}>
                {secondType}
                <img className={styles.typeImage} src={dynamicImport(`${secondType}.png`)} alt={secondType} />
            </div>
        </div>
    );
};
