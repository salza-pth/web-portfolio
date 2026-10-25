import { useCallback } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion.js'

export function useSmoothScrollTo() {
  const reducedMotion = usePrefersReducedMotion()

  return useCallback(
    (event, id) => {
      if (event) event.preventDefault()
      const target = document.getElementById(id)
      if (!target) return false
      target.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
      target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
      return true
    },
    [reducedMotion]
  )
}
