import { FC } from "react";

import { Color, heldItems } from "shared/types";

import {colors} from "shared/lib/constants/colors";

import { pokemonComponentsProps } from "../../types";

import cls from './PokemonAddtionInfo.module.scss';

export const PokemonAdditionInfo:FC<pokemonComponentsProps> =
    ({ pokemon, species}) => {

    const {
        base_experience: baseExperience,
        held_items: heldItems,
        moves,
        game_indices: gameIndices
    } = pokemon;

    const {
        base_happiness: baseHappiness,
        capture_rate: captureRate,
        egg_groups: eggGroups,
        growth_rate: growthRate,
        has_gender_differences: hasGenderDifferences,
        varieties,
        is_baby: isBaby,
        is_legendary: isLegendary,
        is_mythical: isMythical,
        shape,
        color
    } = species;

    const style = {
        color: colors[`${color.name}`]
    };

    return (
        <div className={cls.additional}>
            <div className={cls.training}>
                <div className={cls.train}>
                    <div className={cls.title}>Catch Rate:</div>
                    <div className={cls.info} style={style}>
                        {captureRate}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Base Friendship:</div>
                    <div className={cls.info} style={style}>
                        {baseHappiness}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Base Exp.</div>
                    <div className={cls.info} style={style}>
                        {baseExperience}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Growth Rate</div>
                    <div className={cls.info} style={style}>
                        {growthRate.name}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Held Items</div>
                    <div className={cls.info} style={style}>
                        {heldItems.length !== 0
                            ? heldItems.map((held: heldItems) => <div key={held.item.name}>{held.item.name}</div>)
                            : 'none'}
                    </div>
                </div>
            </div>
            <div className={cls.training}>
                <div className={cls.train}>
                    <div className={cls.title}>Egg Groups</div>
                    <div className={cls.info} style={style}>
                        {eggGroups.length !== 0
                            ? eggGroups.map((egg: Color) => <div key={egg.name}>{egg.name}</div>)
                            : 'None'}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Gender Difference</div>
                    <div className={cls.info} style={style}>
                        {hasGenderDifferences ? 'Yes' : 'No'}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Alternative Form</div>
                    <div className={cls.info} style={style}>
                        {varieties.length <= 1 ? 'No' : 'Yes'}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Baby</div>
                    <div className={cls.info} style={style}>
                        {isBaby ? 'Yes' : 'No'}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Legendary</div>
                    <div className={cls.info} style={style}>
                        {isLegendary ? 'Yes' : 'No'}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Mythical</div>
                    <div className={cls.info} style={style}>
                        {isMythical ? 'Yes' : 'No'}
                    </div>
                </div>
            </div>
            <div className={cls.training}>
                <div className={cls.train}>
                    <div className={cls.title}>Movies Count</div>
                    <div className={cls.info} style={style}>
                        {moves.length}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Game Includes Count</div>
                    <div className={cls.info} style={style}>
                        {gameIndices.length}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Shape</div>
                    <div className={cls.info} style={style}>
                        {shape.name}
                    </div>
                </div>
                <div className={cls.train}>
                    <div className={cls.title}>Color</div>
                    <div className={cls.info} style={style}>
                        {colors[`${color.name}`]}
                    </div>
                </div>
            </div>
        </div>
    );
};