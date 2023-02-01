import { MainHeader } from "widgets/MainHeader/model/MainHeader";
import { useTheme } from "shared/lib/hooks/useTheme";
import { PokemonList } from "widgets/PokemonList/model/PokemonList";

import styles from './PokemonListPage.module.scss';

const PokemonListPage = () => {

    const {theme} = useTheme()

    const bgStyle = theme === 'light' ? {background: '#f4f4f4'} : {background: '#474E68'}
    return (

        <div className={styles.page} style={bgStyle}>
            <MainHeader />
            <PokemonList />
        </div>
    );
};

export default PokemonListPage;