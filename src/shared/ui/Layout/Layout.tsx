import { FC, ComponentPropsWithRef } from "react";
import { classnames } from "../../lib/helpers/classnames/classnames";

import cls from './Layout.module.scss';

export const Layout: FC<ComponentPropsWithRef<"div">> = (
    {children, className,...props}
) => {
    return (
        <div {...props} className={classnames(cls.layout, {}, [className] )}>
            {children}
        </div>
    );
};
