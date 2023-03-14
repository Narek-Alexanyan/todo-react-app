import { useEffect, useRef } from "react";

export const useDidMountEffect = (callback, dependencies) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      callback()
    } else {
      didMountRef.current = true
    }
  }, dependencies)
}