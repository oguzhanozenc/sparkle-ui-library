import { useEffect, useRef } from "react";

type EffectFunction = () => void | (() => void);

export default function useEffectOnUpdate(
  effectFunction: EffectFunction,
  deps: React.DependencyList
): void {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, deps);
}
