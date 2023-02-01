import { FC, ComponentPropsWithRef } from "react";
import { classnames } from "../../lib/helpers/classnames/classnames";

import styles from './Layout.module.scss';

export const Layout: FC<ComponentPropsWithRef<"div">> = ({children, className,...props}) => {
    return (
        <div {...props} className={classnames(styles.layout, {}, [className] )}>
            {children}
        </div>
    );
};
