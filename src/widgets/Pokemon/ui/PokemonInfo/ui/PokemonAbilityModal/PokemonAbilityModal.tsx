import { FC } from "react";

import { useTheme } from "shared/lib/hooks/useTheme";
import { getPokemonAbilityByLink } from "widgets/Pokemon/lib/api/getPokemonAbilityByLink";

import {colors} from "shared/lib/constants/colors";

interface PokemonAbilityModalProps {
    url: string;
    color: string;
    setModal: (arg: boolean) => void;
}

import styles from './PokemonAbilityModal.module.scss';

import loader from '../../../../../../assets/loader.gif';

export const PokemonAbilityModal: FC<PokemonAbilityModalProps> = ({ url, color, setModal }) => {

    const {data, isLoading, isError} = getPokemonAbilityByLink(url)

    const { theme } = useTheme()

    const bgStyles = theme === 'light' ? {background: '#fff'} : {background: '#404258'}

    const center = {...bgStyles, justifyContent: 'center'}

    if (isLoading){
        return (
            <div className={styles.abilityBlock}>
                <div className={styles.modal} style={center}>
                    <img src={loader} alt=""/>
                </div>
            </div>
        )
    }

    if (isError){
        throw new Error('Error with fetching on pokemon ability');
    }

    const {
        name,
        effect_entries: effectEntries,
        flavor_text_entries: flavorTextEntries
    } = data;

    const effect = effectEntries.filter((effect) => effect.language.name === 'en');
    const inDepth = flavorTextEntries.filter((flavor) => flavor.language.name === 'en');


    const bg = { background: colors[color] };

    const titleStyle = theme === 'light'
        ? {borderBottom: '1px solid gray', color: '#000'}
        : {borderBottom: '1px solid #fff', color: '#fff'}

    const close = theme === 'light'
        ? {borderTop: '1px solid gray', color: '#000'}
        : {borderTop: '1px solid white', color: '#fff'}

    const button = theme === 'light'
        ? {border: '1px solid #000', color: '#000'}
        : {border: '1px solid #fff', color: '#fff'}



    return (
        <div className={styles.abilityBlock} onClick={() => setModal(false)}>
            <div className={styles.modal} style={bgStyles} onClick={(event) => event.stopPropagation()}>

                <div className={styles.title} style={titleStyle}>{name}</div>

                <div className={styles.abilities}>

                    <div className={styles.ability}>
                        <div className={styles.type}><div style={bg}>GAME DESCRIPTION</div></div>
                        <div className={styles.value}>
                            {inDepth.length !== 0
                                ? inDepth[inDepth.length - 1].flavor_text
                                : 'None information'
                            }
                        </div>
                    </div>

                    <div className={styles.ability}>
                        <div className={styles.type}><div style={bg}>EFFECT</div></div>
                        <div className={styles.value}>
                            {effect.length !== 0
                                ? effect[0].short_effect
                                : 'None information'}
                        </div>
                    </div>

                    <div className={styles.ability}>
                        <div className={styles.type}><div style={bg}>IN-DEPTH EFFECT</div></div>
                        <div className={styles.value}>
                            {effect.length !== 0
                                ? effect[0].effect
                                : 'None information'
                            }
                        </div>
                    </div>

                </div>

                <div className={styles.close} style={close}>
                    <button style={button} onClick={() => setModal(false)} >close</button>
                </div>
            </div>
        </div>
    );
};
