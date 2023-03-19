import {FC, useState} from "react";

import { getNormalWeightHeight } from "widgets/Pokemon/lib/helpers/getNormalWeightHeight";
import { classnames } from "shared/lib/helpers/classnames/classnames";

import { PokemonButtonType } from "./ui/PokemonButtonType/PokemonButtonType";
import { PokemonAbilityModal } from "./ui/PokemonAbilityModal/PokemonAbilityModal";

import { colors } from "shared/lib/constants/colors";

import { pokemonComponentsProps } from "../../types";

import cls from './PokemonInfo.module.scss';

export const PokemonInfo:FC<pokemonComponentsProps> = ({pokemon, species}) => {

    const [link, setLink] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);

    const {height: h, weight: w, abilities, id, types} = pokemon;
    const {varieties, color} = species

    const {height, weight, lbs, feet} = getNormalWeightHeight(h, w)

    const bg = {
        background: colors[`${color.name}`]
    };

    return (
        <>
            {modal ? <PokemonAbilityModal url={link} color={color.name} setModal={setModal} /> : ''}
            <div className={cls.pokemonInfo}>
                <div className={cls.info}>
                    <div className={cls.inf}>
                        <div className={cls.label}>ID</div>{' '}
                        <div className={cls.content}>
                            #{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}`:`${id}`}
                        </div>
                    </div>
                    <div className={cls.inf}>
                        <div className={cls.label}>Height</div>
                        <div className={cls.content}>
                            {height}m ( {feet} )
                        </div>
                    </div>
                    <div className={cls.inf}>
                        <div className={cls.label}>Weight</div>
                        <div className={cls.content}>
                            {weight}kg ( {lbs}lbs. )
                        </div>
                    </div>
                    <div className={cls.inf}>
                        <div className={cls.label}>Abilities</div>
                        <div className={classnames(cls.content, {}, [cls.contentAbility])}>
                            {abilities.map((ability) => (
                                <div
                                    key={ability.ability.name}
                                    className={cls.ability}
                                    style={bg}
                                    onClick={() => {
                                        setLink(ability.ability.url)
                                        setModal(true)
                                    }}
                                >
                                    {ability.ability.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cls.inf}>
                        <div className={cls.label}>Type</div>
                        <PokemonButtonType types={types} />
                    </div>
                    <div className={cls.inf}>
                        <div className={cls.label}>Forms</div>
                        <div className={classnames(cls.content, {}, [cls.contentForm])}>
                            {varieties.map((variety, index) => (
                                index < 3
                                    ?
                                    <div className={cls.form} style={bg} key={variety.pokemon.name}>
                                        {variety.pokemon.name}
                                    </div>
                                    : ''
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
