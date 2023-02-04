import { FC, useState } from 'react';

import loader from "../../../assets/loader.gif";

import styles from './UserPokemonCardImage.module.scss';

interface UserPokemonCardImageProps {
    url: string
}

export const UserPokemonCardImage: FC<UserPokemonCardImageProps> = ({url}) => {

    const [load, setLoad] = useState<boolean>(true);

    return (
        <>
            {load
                ? <img src={loader} alt='loading gif' className={styles.image}/>
                : <img src={url}
                       alt='pokemon__image'
                       className={styles.image}
                       onLoad={() => setLoad(false)}/>
            }
            <img
                src={url}
                alt={styles.image}
                className='pokemon__image'
                onLoad={() => setLoad(false)}
                style={{ display: 'none' }}
            />
        </>
    );
};
