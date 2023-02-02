import { FC } from 'react';
import { useTheme } from "shared/lib/hooks/useTheme";
import {useNavigate} from "react-router-dom";
import {colors} from "shared/lib/constants/colors";

import styles from './PokemonHeader.module.scss';
import {Layout} from "shared/ui/Layout/Layout";

import  backArrowIcon from '../../../assets/icon/backArrow.svg';

export const PokemonHeader: FC<{color: string}> = ({color}) => {

    const { theme } = useTheme()
    const navigate = useNavigate()

    const bgStyles = theme === 'light' ? {background: colors[`${color}`]} : {background: '#404258'}



    return (
        <div style={bgStyles} className={styles.header}>
            <Layout className={styles.pokemonHeader}>
                <div className={styles.toBack} onClick={() => navigate('/')}>
                    <img src={backArrowIcon} alt="backArrowIcon"/>
                </div>
                <div className={styles.addToFavorite}>
                    <button>
                        Add to favourite
                    </button>
                </div>
            </Layout>
        </div>
    );
};
