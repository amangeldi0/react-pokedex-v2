import { FC, useState } from 'react';

import loader from '../../../../assets/loader.gif'
import styles from './PokemonCardImage.module.scss';

interface PokemonCardImageProps {
    url: string
}

export const PokemonCardImage:FC<PokemonCardImageProps> = ({url}) => {

    const [load, setLoad] = useState<boolean>(true);

    return (
        <div className={styles.image}>
            {load ? (
                <div className={styles.loader}>
                    <img src={loader} alt='loading gif'/>
                    <div className={styles.info}>image loading...</div>
                </div>
            ) : (
                <div>
                    <img
                        src={url}
                        alt='pokemon__image'
                        className={styles.img}
                        onLoad={() => setLoad(false)}
                    />
                </div>
            )}
            <img
                src={url}
                alt={styles.img}
                className='image'
                onLoad={() => setLoad(false)}
                style={{ display: 'none' }}
            />
        </div>
    );
};