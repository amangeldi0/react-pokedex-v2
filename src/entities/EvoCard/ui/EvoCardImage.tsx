import { FC, useState } from 'react';

import loader from "assets/loader.gif";
import cls from "./EvoCardImage.module.scss";

interface EvoCardImageProps {
    url: string;
}

export const EvoCardImage:FC<EvoCardImageProps> = ({url}) => {

    const [load, setLoad] = useState<boolean>(true);

    return (
        <>
            {load
                ? <img src={loader} alt='loading gif' className={cls.image}/>
                : <img src={url}
                       alt='pokemon image'
                       className={cls.image}
                       onLoad={() => setLoad(false)}/>
            }
            <img
                src={url}
                alt='pokemon image'
                className={cls.image}
                onLoad={() => setLoad(false)}
                style={{ display: 'none' }}
            />
        </>
    );
};
