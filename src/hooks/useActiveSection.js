import { useEffect, useState } from 'react'

export function useActiveSection(ids, { rootMargin = '0px' } = {}) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) {
      setActiveId(null)
      return
    }

    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let best = null
        let bestRatio = 0
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }

        if (best) setActiveId(best)
      },
      {
        rootMargin,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}
