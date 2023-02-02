import { FC } from "react";
import {getPokemonByName} from "shared/api/getPokemonByName";
import {useNavigate} from "react-router-dom";

import {colors} from "shared/lib/constants/colors";

import styles from './EvoCard.module.scss';
import loader from '../../../assets/loader.gif';

interface EvoCardProps{
    name: string;
    curName: string;
    color: string
}
export const EvoCard: FC<EvoCardProps> =
    ({name, curName, color}) => {

    const { data, isLoading, isError } = getPokemonByName(name);
    const navigate = useNavigate();

    if (isLoading)
        return (
            <div className={styles.EvoCard}
                 style={{ justifyContent: 'center' }}>
                <img src={loader} alt='loader' className={styles.image__loader} />
            </div>
        );

    if (isError){
        console.log('some error')
    }

    const { id, sprites } = data;

    const bg = {
        color: colors[color]
    };

    return (
        <div className={styles.EvoCard} onClick={() => navigate(`/pokemon/${name}`)}>

            <img src={sprites.other?.['official-artwork'].front_default} className={styles.image} alt='pokemon evo image' />

            <div className={styles.id} style={curName === name ? bg : {}}>
                #{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}
            </div>
            <div className={styles.name} style={curName === name ? bg : {}}>
                {name}
            </div>
        </div>
    );
};
