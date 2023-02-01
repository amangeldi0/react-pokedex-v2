import { FC, ComponentPropsWithRef } from 'react';
import { classnames } from "../../lib/helpers/classnames/classnames";

import styles from './Logo.module.scss';

export const Logo: FC<ComponentPropsWithRef<'div'>> = ({className, ...props}) => {

    return (
        <div {...props} className={classnames(styles.logo, {}, [className])}>
            Pokemon
        </div>
    );
};