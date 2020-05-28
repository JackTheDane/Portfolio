import { useIsomorphicLayoutEffect } from 'utils/SSR/useIsomorphicLayoutEffect';
import { useRef, DependencyList } from 'react'
import { Coordinate } from 'models/interfaces/Coordinate';

const isBrowser = typeof window !== `undefined`

const getScrollPosition = (): Coordinate => !isBrowser ? { x: 0, y: 0 } : { x: window.scrollX, y: window.scrollY };

export function useScrollPosition(effect: (positions: {prevPos: Coordinate, currPos: Coordinate}) => void, deps: DependencyList, wait?: number) {
  const position = useRef(getScrollPosition())

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition()
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}
