import { useRouter } from 'next/router';
import { useWindowWidth } from './useWindowWidth';
import { useState } from "react";
import { useIsomorphicLayoutEffect } from '../utils/SSR/useIsomorphicLayoutEffect';

export const useElementHeight = (elementRef: React.MutableRefObject<HTMLElement>): number => {

  const [elementHeight, setElementHeight] = useState(0);
  const windowWidth: number = useWindowWidth();
  const { asPath } = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (elementRef && elementRef.current) setElementHeight(elementRef.current.clientHeight);
  },
    [
      windowWidth, // Update if the window width has changed
      asPath        // Or if the user has navigated (Shown via asPath)
    ]
  );

  return elementHeight;
}
