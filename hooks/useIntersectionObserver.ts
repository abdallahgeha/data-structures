import { useEffect, useRef, useState } from "react"
import useIsClient from './useIsClient'

interface ExtendedEntry extends IntersectionObserverEntry {
  isVisible: boolean
}

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

type Return<T> = [(node: T) => void, ExtendedEntry?]

export default function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: Args): Return<T> {
  const observer = useRef<IntersectionObserver | null>(null)
  const [entry, setEntry] = useState<ExtendedEntry>()
  const [node, setNode] = useState<T>() // DOM Ref
  const isClient = useIsClient()
  const hasIOSupport = isClient && !!window.IntersectionObserver
  const noUpdate = entry?.isVisible && freezeOnceVisible
  const IOOptions = { threshold, root, rootMargin }
  const updateEntry = (entries: IntersectionObserverEntry[]): void => {
    const isVisible = entries[0].intersectionRatio > 0
    setEntry({ ...entries[0], isVisible })
  }
  useEffect(
    () => {
      if (!hasIOSupport || noUpdate || typeof node === `undefined`) return

      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(updateEntry, IOOptions)

      const { current: currentObserver } = observer
      currentObserver.observe(node)
      return () => currentObserver.disconnect()
    },
    [node, threshold, root, rootMargin, noUpdate],
  )
  return [setNode, entry]
}