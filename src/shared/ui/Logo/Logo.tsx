import { ComponentPropsWithRef, FC } from 'react';

import { classnames } from '../../lib/helpers/classnames/classnames';

import styles from './Logo.module.scss';

export const Logo: FC<ComponentPropsWithRef<'div'>> = (
    { className, children, ...props },
) => (
    <div {...props} className={classnames(styles.logo, {}, [className])}>
        {children}
    </div>
);
