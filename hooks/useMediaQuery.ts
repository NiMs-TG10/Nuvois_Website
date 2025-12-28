import { useState, useEffect } from 'react'

/**
 * Custom hook to track if a given CSS media query matches the current viewport.
 * @param query The media query string (e.g., '(max-width: 768px)')
 * @returns boolean indicating if the query matches
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check if window is defined (required for server-side rendering safety)
    if (typeof window === 'undefined') {
      return
    }

    const mediaQueryList = window.matchMedia(query)

    // Initial check
    setMatches(mediaQueryList.matches)

    // Listener function
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

    // Add event listener
    mediaQueryList.addEventListener('change', listener)

    // Clean up event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}