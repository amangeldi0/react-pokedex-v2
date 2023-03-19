export interface PokemonNameUrl {
    url: string;
    name: string;
}

export interface getPokemonNamesResponse {
    count: number;
    next: string | null;
    previous: null | string;
    results: PokemonNameUrl[]
}

export interface version_detail {
    rarity: number;
    version: {
        name: string;
        url: string;
    };
}

export interface heldItems {
    item: {
        name: string;
        url: string;
    };
    version_detail: version_detail[];
}

export interface Species {
    name: string;
    url: string;
}

export interface GameIndex {
    game_index: number;
    version: Species;
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: Species;
    version_group: Species;
}

export interface Move {
    move: Species;
    version_group_details: VersionGroupDetail[];
}

export interface Versions {
    // eslint-disable-next-line no-use-before-define
    'generation-i': GenerationI;
    // eslint-disable-next-line no-use-before-define
    'generation-ii': GenerationIi;
    // eslint-disable-next-line no-use-before-define
    'generation-iii': GenerationIii;
    // eslint-disable-next-line no-use-before-define
    'generation-iv': GenerationIv;
    // eslint-disable-next-line no-use-before-define
    'generation-v': GenerationV;
    // eslint-disable-next-line no-use-before-define
    'generation-vi': { [key: string]: Home };
    // eslint-disable-next-line no-use-before-define
    'generation-vii': GenerationVii;
    // eslint-disable-next-line no-use-before-define
    'generation-viii': GenerationViii;
}

export interface Ability {
    ability: Species;
    is_hidden: boolean;
    slot: number;
}

export interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
}

export interface GenerationI {
    'red-blue': RedBlue;
    yellow: RedBlue;
}

export interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
}

export interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent?: string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Gold;
}

export interface Emerald {
    front_default: string;
    front_shiny: string;
}

export interface GenerationIii {
    emerald: Emerald;
    'firered-leafgreen': Gold;
    'ruby-sapphire': Gold;
}

export interface Home {
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
}

export interface DreamWorld {
    front_default: string;
    front_female: null;
}

export interface GenerationVii {
    icons: DreamWorld;
    'ultra-sun-ultra-moon': Home;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    'official-artwork': OfficialArtwork;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Species;
}

export interface Type {
    slot: number;
    type: Species;
}

export interface Color {
    name: string;
    url: string;
}

export interface EvolutionChain {
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: Color;
    version: Color;
}

export interface Genus {
    genus: string;
    language: Color;
}

export interface Name {
    language: Color;
    name: string;
}

export interface PalParkEncounter {
    area: Color;
    base_score: number;
    rate: number;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex: Color;
}

export interface Variety {
    is_default: boolean;
    pokemon: Color;
}

export interface Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other?: Other;
    versions?: Versions;
    animated?: Sprites;
}
export interface GenerationV {
    'black-white': Sprites;
}

export interface GenerationIv {
    'diamond-pearl': Sprites;
    'heartgold-soulsilver': Sprites;
    platinum: Sprites;
}

export interface PokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: Color;
    egg_groups: Color[];
    evolution_chain: EvolutionChain;
    evolves_from_species: null;
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: never[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genus[];
    generation: Color;
    growth_rate: Color;
    habitat: Color;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: Name[];
    order: number;
    pal_park_encounters: PalParkEncounter[];
    pokedex_numbers: PokedexNumber[];
    shape: Color;
    varieties: Variety[];
}

export interface EvolutionDetail {
    gender: null;
    held_item: null;
    item: null;
    known_move: null;
    known_move_type: null;
    location: null;
    min_affection: null;
    min_beauty: null;
    min_happiness: null;
    min_level: number | null;
    needs_overworld_rain: boolean;
    party_species: null;
    party_type: null;
    relative_physical_stats: null;
    time_of_day: string;
    trade_species: null;
    trigger: Species;
    turn_upside_down: boolean;
}

export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Species[];
    game_indices: GameIndex[];
    height: number;
    held_items: heldItems[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

export interface Chain {
    evolution_details: EvolutionDetail[];
    evolves_to: Chain[];
    is_baby: boolean;
    species: Species;
}

export interface Evolution {
    baby_trigger_item: null;
    chain: Chain;
    id: number;
}
