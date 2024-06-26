import { useEffect, useRef } from "react";

export function useWheelHack(timeout = 300) {
  const wheelTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  // block the body from scrolling while wheelTimeout is set
  useEffect(() => {
    const maybeCancelWheel = (e) => wheelTimeout.current && e.preventDefault();
    document.body.addEventListener("wheel", maybeCancelWheel, {
      passive: false,
    });
    return () => document.body.removeEventListener("wheel", maybeCancelWheel);
  }, []);

  // return a function that can be used to prevent scrolling for timeout ms
  return () => {
    clearTimeout(wheelTimeout.current);
    wheelTimeout.current = setTimeout(() => {
      wheelTimeout.current = undefined;
    }, timeout);
  };
}
