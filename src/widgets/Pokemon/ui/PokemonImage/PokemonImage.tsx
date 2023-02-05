import { FC, useState } from 'react';


import loader from "../../../../assets/loader.gif";
import styles from "./PokemonImage.module.scss";


interface PokemonImageProps {
    url: string
}

export const PokemonImage: FC<PokemonImageProps> = ({url}) => {
    const [load, setLoad] = useState<boolean>(true);

    return (
        <div className={styles.pokemonImage}>
            {load
                ? <img src={loader} alt='loading gif'/>
                : <img src={url}
                       alt='pokemon__image'
                       onLoad={() => setLoad(false)}/>
            }
            <img
                src={url}
                alt='pokemon__image'
                onLoad={() => setLoad(false)}
                style={{ display: 'none' }}
            />
        </div>
    );
};
