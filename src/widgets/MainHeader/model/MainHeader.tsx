import { UserAvatar } from 'entities/UserAvatar/model/UserAvatar';
import { SearchPokemons } from 'features/SearchPokemons/model/SearchPokemons';
import { Layout } from 'shared/ui/Layout/Layout';
import { Logo } from 'shared/ui/Logo/Logo';
import { Theme } from 'shared/ui/Theme/Theme';

import cls from './MainHeader.module.scss';

export const MainHeader = () => (
    <div className={cls.shadow}>
        <Layout>
            <div className={cls.mainHeader}>
                <div>
                    <Logo>Poke`dex</Logo>
                </div>
                <div className={cls.icons}>
                    <UserAvatar />
                    <Theme />
                    <SearchPokemons searchShow={false} />
                </div>

            </div>
        </Layout>
    </div>

);
