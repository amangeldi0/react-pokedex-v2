import { MainHeader } from 'widgets/MainHeader/model/MainHeader';
import { PokemonList } from 'widgets/PokemonList/model/PokemonList';

import styles from './PokemonListPage.module.scss';

const PokemonListPage = () => (

    <div className={styles.page}>
        <MainHeader />
        <PokemonList />
    </div>
);

export default PokemonListPage;
