import { useParams } from "react-router-dom";
import { Pokemon } from "widgets/Pokemon/model/Pokemon";

const PokemonPage = () => {

    const { pokemonName } = useParams();

    return <Pokemon pokemonName={pokemonName} />;
};

export default PokemonPage;