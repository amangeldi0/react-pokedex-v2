import { useState } from "react";
import { useTheme } from "shared/lib/hooks/useTheme";

import { SearchPokemons } from "features/SearchPokemons/model/SearchPokemons";
import { UserAvatar } from "entities/UserAvatar/model/UserAvatar";
import { Layout } from "shared/ui/Layout/Layout";
import { Theme } from "shared/ui/Theme/Theme";
import { Logo } from "shared/ui/Logo/Logo";

import styles from './MainHeader.module.scss';

export const MainHeader = () => {

    const { theme } = useTheme()
    const [ show, _setShow ] = useState<boolean>(false);

    const bgStyles = theme === 'light' ? {background: '#fff'} : {background: '#404258'}

    return (
        <div className={styles.shadow} style={bgStyles}>
            <Layout >
                <div className={styles.mainHeader} >
                    <div>
                        <Logo children={'Pokemon'} />
                    </div>
                    <div className={styles.icons}>
                        <UserAvatar/>
                        <Theme />
                        <SearchPokemons searchShow={show}/>
                    </div>

                </div>
            </Layout>
        </div>

    );
};
