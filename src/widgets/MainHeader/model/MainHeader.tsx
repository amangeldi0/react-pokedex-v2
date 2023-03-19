import { useState } from "react";

import { SearchPokemons } from "features/SearchPokemons/model/SearchPokemons";
import { UserAvatar } from "entities/UserAvatar/model/UserAvatar";
import { Layout } from "shared/ui/Layout/Layout";
import { Theme } from "shared/ui/Theme/Theme";
import { Logo } from "shared/ui/Logo/Logo";

import cls from './MainHeader.module.scss';

export const MainHeader = () => {
    const [ show, _setShow ] = useState<boolean>(false);

    return (
        <div className={cls.shadow}>
            <Layout >
                <div className={cls.mainHeader} >
                    <div>
                        <Logo children={'Poke\`dex'} />
                    </div>
                    <div className={cls.icons}>
                        <UserAvatar/>
                        <Theme />
                        <SearchPokemons searchShow={show}/>
                    </div>

                </div>
            </Layout>
        </div>

    );
};
