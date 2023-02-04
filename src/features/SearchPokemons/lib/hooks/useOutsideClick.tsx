import {
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction
} from 'react';

export interface useOutsideClickProps {
  initialIsVisible: boolean;
  setSearch?: Dispatch<SetStateAction<string>>;
}

export const useOutsideClick = ({ initialIsVisible, setSearch }: useOutsideClickProps) => {

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
