import { MutableRefObject, RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export default function useOnClickOutside<
  T extends HTMLElement = HTMLDivElement
>(ref: RefObject<T>, handler: (event: Event) => void) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      //// custom prevention for the dropDown button ////
      const dropdown = document.querySelector('.dropbtn')
      //// custom prevention for the dropDown button ////

      if (event?.target == dropdown || !el || el.contains((event?.target as Node) ||null)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);
    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref as MutableRefObject<T>, handler]);
}
