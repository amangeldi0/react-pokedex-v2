import { FC } from 'react';

import { useTheme } from "shared/lib/hooks/useTheme";
import { useNavigate } from "react-router-dom";

import { colors } from "shared/lib/constants/colors";

import { Layout } from "shared/ui/Layout/Layout";
import { AddToFavourite } from "../ui/AddToFavourite";

import backArrowIcon from 'assets/icon/backArrow.svg';
import cls from './PokemonHeader.module.scss';


export const PokemonHeader: FC<{color: string, name: string}> = ({color, name}) => {

    const { theme } = useTheme()
    const navigate = useNavigate()
    const bgStyles = theme === 'light' ? {background: colors[`${color}`]} : {background: '#404258'}

    return (
        <div style={bgStyles} className={cls.header}>
            <Layout className={cls.pokemonHeader}>
                <div className={cls.toBack} onClick={() => navigate(-1)}>
                    <img src={backArrowIcon} alt="backArrowIcon"/>
                </div>
                <AddToFavourite name={name} />
            </Layout>
        </div>
    );
};
