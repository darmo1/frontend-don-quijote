import { useEffect, useState } from "react"

export function useBreakpoint( breakpoint = 0 ){
  return useMediaQuery(`(min-width: ${breakpoint}px)`)
}

export function useMediaQuery(query=''){
  const [mediaMatches, setMediaMatches] = useState<boolean | undefined>();

  useEffect(() => {
    if(window){
      const initialMedia = window.matchMedia(query);

      const handleMediaChange = () => setMediaMatches(window.matchMedia(query).matches);
      window.addEventListener('resize', handleMediaChange);

      setMediaMatches(initialMedia.matches);
      return () => window.removeEventListener('resize', handleMediaChange);
    }

    return () => {};
  }, [ query ]);

  return mediaMatches;
}