import {
    Dispatch,
    MutableRefObject,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react';

export interface useOutsideClickProps {
  initialIsVisible: boolean;
  setSearch?: Dispatch<SetStateAction<string>>;
}

interface useOutsideClickPropsRes {
  ref: MutableRefObject<HTMLDivElement>,
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>;

}

export const useOutsideClick = ({ initialIsVisible, setSearch }: useOutsideClickProps): useOutsideClickPropsRes => {
    const [show, setShow] = useState<boolean>(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: Event) => {
        if (ref.current != null && !ref.current.contains(event.target as HTMLElement)) {
            setShow(false);
            if (typeof setSearch === 'function') {
                setSearch('');
            }
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    });

    return { ref, show, setShow };
};
